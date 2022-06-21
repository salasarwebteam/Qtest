<?php
/*
  Plugin Name: Cat App
  Plugin URI: http://www.salasarcybersolutions.com
  Description: A powerful and beautiful quiz plugin for WordPress.
  Version: 3.0
  Author: Salasar Cyber Solutions / Modified and improved by ZenNg (freelancer.zenng@gmail.com)
  Author URI: http://www.salasarcybersolutions.com
  License: GNU
*/


register_activation_hook(__FILE__, 'cat_app_create_table');
register_uninstall_hook(__FILE__, 'delete_cat_app_tables');

// Includes code files
require_once plugin_dir_path( __FILE__ ) . 'functions.php';
require_once plugin_dir_path( __FILE__ ) . 'ajax-functions.php';
require_once plugin_dir_path( __FILE__ ) . 'create-table.php';



// cat app admin menu
add_action('admin_menu', 'catApp_plugin_menu');
function catApp_plugin_menu(){

   add_menu_page('Lsat Cat App', 'Lsat Cat App', 'manage_options', 'catapp-quiz-list', 'lsat_cat_quiz_list');
   add_submenu_page('catapp-quiz-list','All Cat Quiz', 'All Cat Quiz','manage_options','catapp-quiz-list'); 
   add_submenu_page('catapp-quiz-list', 'Questions List', 'Questions List', 'manage_options', 'cat-question-list', 'questions_list');
   add_submenu_page(null, 'Add cat quiz', 'Add cat quiz', 'manage_options', 'add-cat-quiz', 'add_cat_quiz');
   add_submenu_page(null, 'Edit Cat Quiz', 'Edit Cat Quiz', 'manage_options', 'edit-cat-quiz', 'edit_cat_quiz');
   add_submenu_page(null, 'Add Cat Question', 'Add Cat Question', 'manage_options', 'add-cat-question', 'add_cat_question');
   add_submenu_page(null, 'Edit Cat Question', 'Edit Cat Question', 'manage_options', 'edit-cat-question', 'edit_cat_question');
   add_submenu_page('QTest', 'Track Questions Status', 'Track Questions Status', 'manage_options', 'trackRightAndWrong', 'trackRightAndWrong');
}

function lsat_cat_quiz_list(){
   global $wpdb;
   $ctest_table = $wpdb->prefix . "cta_category";
   $result = $wpdb->get_results("SELECT * FROM $ctest_table ORDER BY qcategory_id DESC");
   include('includes/cat-quiz-list.php');
}

function add_cat_question(){
   include('includes/add-cat-question.php');
}

function questions_list(){
   include('includes/questions-list.php');
}

//Edit Question Form
function edit_cat_question(){
   include('includes/edit-cat-question.php');
}
function add_cat_quiz(){
   include('includes/add-cat-quiz.php');
}
function edit_cat_quiz(){
   include('includes/add-cat-quiz.php');
}

add_action('wp_enqueue_scripts', 'flz_cat_app_enqueue_scripts');
function flz_cat_app_enqueue_scripts(){
    wp_register_script('flz_cat_app.js', plugin_dir_url( __FILE__ )  . 'assets/front-end/js/flz_cat_app.js', array(), false, true);
    wp_localize_script('flz_cat_app.js', 'ajax_object', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ));
    wp_enqueue_style('flz_cat_app.css', plugin_dir_url( __FILE__ ) . 'assets/front-end/css/flz_cat_app.css');

    wp_enqueue_script('flz_cat_app.js');
    wp_enqueue_style('line-awesome.css', 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css');
}

// Enque style for admin area
function catapp_custom_wp_admin_style() {
    wp_enqueue_style('cat_bootstrap_min_style', plugin_dir_url( __FILE__ ) . 'assets/back-end/css/bootstrap.min.css');
    wp_enqueue_style('cat_bootstrap_min_style');
    wp_enqueue_style('cat_datatables_min', plugin_dir_url( __FILE__ ) . 'assets/back-end/css/dataTables.bootstrap.min.css');
    wp_enqueue_style('cat_datatables_min');    
    wp_enqueue_style('cat_font-awesome.min', plugin_dir_url( __FILE__ ) . 'assets/back-end/css/font-awesome.min.css');
    wp_enqueue_style('cat_font-awesome.min');
    wp_enqueue_style('catapp-admin', plugin_dir_url( __FILE__ ) . 'assets/back-end/css/catapp-admin.css');
    wp_enqueue_style('catapp-admin');
    wp_enqueue_script('cat-custom', plugin_dir_url(__FILE__) . 'assets/back-end/js/catapp-custom.js', array('jquery'));
    wp_enqueue_script('cat-bootstrap.min', plugin_dir_url(__FILE__) . 'assets/back-end/js/bootstrap.min.js', array('jquery'));
    wp_enqueue_script('cat-dataTables.min', plugin_dir_url(__FILE__) . 'assets/back-end/js/jquery.dataTables.min.js', array('jquery'));
}
add_action( 'admin_enqueue_scripts', 'catapp_custom_wp_admin_style' );

ob_start();
function CatApp_is_first_time()
{

    if (isset($_COOKIE['_wp_flzcat_first_time'])) {
        return false;
    }

    $sDomain = COOKIE_DOMAIN ? COOKIE_DOMAIN : $_SERVER['HTTP_HOST'];

    // expires in 30 days.
    setcookie('_wp_flzcat_first_time', '1', time() + (WEEK_IN_SECONDS * 4), '/', $sDomain);

    return true;
}


//Sort Code
function CatApp($atts)
{
   $id = $atts['id'];

   $userId = get_current_user_id();
   $user_info = get_userdata($userId);
   $email = $user_info->user_email;
   $userId == "" ? $myfunction = "userForm_" . $id . "('1')" : $myfunction = "start_" . $id . "()";
   $dir = plugin_dir_path(__DIR__);
   global $wpdb;
   $category_result  = $wpdb->get_row("SELECT * FROM wp_cta_category where qcategory_id=" . $id . "");
   $category_title   = $category_result->category_title;
   $test_height      = $category_result->test_height == '' ? '' : $category_result->test_height;
   $test_mode_height = $category_result->test_mode_height == '' ? '' : $category_result->test_mode_height;
   $expl_mode_height = $category_result->explanation_mode_height == '' ? '' : $category_result->explanation_mode_height;

   $result = $wpdb->get_results("SELECT * FROM wp_cta_question where qcategory_id=" . $id . " ORDER BY qcategory_id, question_no, qtest_id");
   
   $aAllQ = array();
   if(count($result) > 0){
      foreach ($result as $aValue) {
         $aAllQ[$aValue->hard_level][] = array(
            'qtest_id'        => $aValue->qtest_id, 
            'question_no'     => $aValue->question_no, 
            'qcategory_id'    => $aValue->qcategory_id, 
            'is_unseen'       => $aValue->is_unseen, 
            'unseen_passage'  => $aValue->unseen_passage, 
            'quiz_type'       => $aValue->quiz_type, 
            'quiz'            => $aValue->quiz, 
            'a_option'        => $aValue->a_option, 
            'a_explain'       => $aValue->a_explain, 
            'b_option'        => $aValue->b_option, 
            'b_explain'       => $aValue->b_explain, 
            'c_option'        => $aValue->c_option, 
            'c_explain'       => $aValue->c_explain, 
            'd_option'        => $aValue->d_option, 
            'd_explain'       => $aValue->d_explain, 
            'e_option'        => $aValue->e_option, 
            'e_explain'       => $aValue->e_explain, 
            'right_answer'    => $aValue->right_answer, 
            'answer_hint'     => $aValue->answer_hint, 
            'questions_explain' => $aValue->questions_explain, 
            'answer_explain'  => $aValue->answer_explain, 
            'hard_level'      => $aValue->hard_level, 
            'status'          => $aValue->status, 
            'is_essay'        => $aValue->is_essay, 
            'essay_explain'   => $aValue->essay_explain
         );
      }
   }

   $aFirst = array(
      'total_time' => round(count($aAllQ['medium']) * 1.5),
      'total_question' => count($aAllQ['medium'])
   );

   /*
   $aData['hard'] = $aHardQ;
   $aData['medium'] = $aMediumQ;
   $aData['easy'] = $aEasyQ;
   */
   $aData['category_id'] = $id;
   $sResData = json_encode($aAllQ);

   /*
   $total_time = $count_medium * 1.5;
   if (strpos($total_time, '.') !== false) {
      $total_time_new = $total_time + 0.5;
   } else {
      $total_time_new = $total_time;
   }
   */
   
   if($_REQUEST['dbmodify']){
      global $wpdb;

      //$catappAnswer = $wpdb->prefix . "cta_answers";
      //$sql = "DROP TABLE IF EXISTS $catappAnswer";
      //$wpdb->query($sql);
      /*
      $sql = "CREATE TABLE `" . $catappAnswer . "` (
         `id` int(11) NOT NULL AUTO_INCREMENT, PRIMARY KEY (`id`),
         `category_id` INT(11) NOT NULL,
         `wp_user_id` bigint(20) NOT NULL,
         `user_answer` text DEFAULT NULL,
         `quiz_level` ENUM('hard','medium','easy') NOT NULL,
         `answer_date` datetime NOT NULL 
         ) ENGINE=MyISAM DEFAULT CHARSET=latin1";
         */
      //$sql = "ALTER TABLE `wp_cta_question` CHANGE COLUMN `is_unseen` `is_unseen` ENUM('0','1','2') NOT NULL DEFAULT '0' COMMENT '0-No,1-Yes,2-Reading-Comprehension' AFTER `qcategory_id`";

      $sql = "ALTER TABLE `wp_cta_question` ADD COLUMN `is_essay` ENUM('0','1') NOT NULL DEFAULT '0' COMMENT '0-No,1-Yes' AFTER `answer_explain`, ADD COLUMN `essay_explain` TEXT AFTER `is_essay`";
      $results = $wpdb->query($sql);
      var_dump($results);
      die();
   }

   // Get user answer stored in the DB
   $aUserDataDb = "";
   $sLevel = 'medium';
   if (get_current_user_id() != 0) {
       $aUserDataDb = $wpdb->get_var( "SELECT user_answer FROM ".($wpdb->prefix . 'cta_answers')." WHERE quiz_level = '".strtolower(trim($sLevel))."' AND category_id = ".$id." AND wp_user_id = " . get_current_user_id() . "");

       $aUserDataDb = str_replace('\\', '', unserialize($aUserDataDb));
   }

   $sFirstTime = 'false';
   if(CatApp_is_first_time() == true){
      $sFirstTime = 'true';
   }

   extract(shortcode_atts(array('id' => ''), $atts));
   include('templates/quizPaper.php');
}
add_shortcode('CatApp', 'CatApp');
