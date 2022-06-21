<?php


function cat_app_create_table()
{ 
   global $wpdb;
   $sql = array();

    //For Cat Quiz answers
    $tableAnswers = $wpdb->prefix . "cta_answers";
    if ($wpdb->get_var("show tables like '" . $tableAnswers . "'") !== $tableAnswers) {
        $sql[] = "CREATE TABLE `" . $tableAnswers . "` (
    `id` int(11) NOT NULL AUTO_INCREMENT, PRIMARY KEY (`id`),
    `category_id` INT(11) NOT NULL,
    `wp_user_id` bigint(20) NOT NULL,
    `user_answer` text DEFAULT NULL,
      `level` ENUM('hard','medium','easy') NOT NULL,
    `answer_date` datetime NOT NULL  
    ) ENGINE=MyISAM DEFAULT CHARSET=latin1";
    }


   $categorytable = $wpdb->prefix . "cta_category";
    if ($wpdb->get_var("show tables like '" . $categorytable . "'") !== $categorytable) {
         $sql[] = "CREATE TABLE `" . $categorytable . "` (
         `qcategory_id` int(11) NOT NULL AUTO_INCREMENT, PRIMARY KEY (`qcategory_id`),
         `category_title` text NOT NULL,
         `directions` text NOT NULL,
         `test_height` varchar(20) NOT NULL,
         `test_mode_height` varchar(20) NOT NULL,
         `explanation_mode_height` varchar(20) NOT NULL,
         `user_id` varchar(150) NOT NULL,
         `test_time` varchar(20) NOT NULL,
         `status` enum('0','1') NOT NULL,
         `create_date` datetime NOT NULL 
      ) ENGINE=MyISAM DEFAULT CHARSET=latin1";
   }


   $cta_question_table = $wpdb->prefix . "cta_question";
   if ($wpdb->get_var("show tables like '" . $cta_question_table . "'") !== $cta_question_table) {
         $sql[] = "CREATE TABLE `" . $cta_question_table . "` (
         `qtest_id` int(11) NOT NULL AUTO_INCREMENT, PRIMARY KEY (`qtest_id`),
         `question_no` varchar(120) NOT NULL,
         `qcategory_id` varchar(120) NOT NULL,
         `is_unseen` enum('0','1') NOT NULL DEFAULT '0' COMMENT '0-No,1-Yes',
         `unseen_passage` text NOT NULL,
         `quiz_type` enum('0','1') NOT NULL DEFAULT '0' COMMENT '0-Text Type,1-Image Type',
         `quiz` text NOT NULL,
         `a_option` text NOT NULL,
         `a_explain` text NOT NULL,
         `b_option` text NOT NULL,
         `b_explain` text NOT NULL,
         `c_option` text NOT NULL,
         `c_explain` text NOT NULL,
         `d_option` text NOT NULL,
         `d_explain` text NOT NULL,
         `e_option` text NOT NULL,
         `e_explain` text NOT NULL,
         `right_answer` enum('a_option','b_option','c_option','d_option','e_option') NOT NULL,
         `answer_hint` text NOT NULL,
         `questions_explain` text NOT NULL,
         `answer_explain` text NOT NULL,
         `hard_level` enum('hard','medium','easy') NOT NULL,
         `status` enum('0','1') NOT NULL,
         `add_date` datetime NOT NULL
      ) ENGINE=MyISAM DEFAULT CHARSET=latin1";
   }

   if ( !empty($sql) ) {
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
        add_option("wnm_db_version", $wnm_db_version);
    }
}



/**********************************/
/*    Delete Table               */
/**********************************/ 
function delete_cat_app_tables() {
    global $wpdb;
  
    $cta_answers_table = $wpdb->prefix . "cta_answers";
    $sql = "DROP TABLE IF EXISTS $cta_answers_table";
    $wpdb->query($sql); 
    delete_option("my_plugin_db_version");
  
    $cta_category_table = $wpdb->prefix . "cta_category"; 
    $sql_q = "DROP TABLE IF EXISTS $cta_category_table";
    $wpdb->query($sql_q);
    delete_option("my_plugin_db_version");

    $cta_question_table = $wpdb->prefix . "cta_question"; 
    $sql_q = "DROP TABLE IF EXISTS $cta_question_table";
    $wpdb->query($sql_q);
    delete_option("my_plugin_db_version");
} 