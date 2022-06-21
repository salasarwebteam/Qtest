<?php 




//Save Category
add_action('wp_ajax_saveCTSCategory', 'create_cat_quiz');
add_action('wp_ajax_nopriv_saveCTSCategory', 'create_cat_quiz');

function create_cat_quiz()
{
   $category_title          = $_POST['category_title'];
   $directions              = $_POST['quiz_directions'];
   $test_height             = $_POST['test_height'];
   $test_mode_height        = $_POST['test_mode_height'];
   $explanation_mode_height = $_POST['explanation_mode_height'];
   $test_time               = '';
   $user_id                 = get_current_user_id();
   $directions              = $_POST['quiz_directions'];
   $data                    = array('category_title' => $category_title, 'directions' => $directions, 'test_height' => $test_height, 'test_mode_height' => $test_mode_height, 'explanation_mode_height' => $explanation_mode_height, 'user_id' => $user_id, 'test_time' => '0');
   
   global $wpdb;
   $qtest_table = $wpdb->prefix . "cta_category";
   $wpdb->insert($qtest_table, $data);
   echo "suces";
   die();
}


//Update Category
add_action('wp_ajax_updateCTACategory', 'updateCTACategory');
add_action('wp_ajax_nopriv_updateCTACategory', 'updateCTACategory');
function updateCTACategory()
{
   $qcategory_id                 = $_POST['qcategory_id'];
   $category_title               = $_POST['category_title'];
   $test_height                  = $_POST['test_height'];
   $questions_test_height        = $_POST['questions_test_height'];
   $questions_explanation_height = $_POST['questions_explanation_height'];
   $directions = $_POST['e_directions'];
   $where        = array('qcategory_id' => $qcategory_id);
   $data = array('category_title' => $category_title, 'test_height' => $test_height, 'test_mode_height' => $questions_test_height, 'explanation_mode_height' => $questions_explanation_height, 'directions' => $directions);
   global $wpdb;
   $qtest_table = $wpdb->prefix . "cta_category";
   $wpdb->update($qtest_table, $data, $where);
   //$wpdb->last_query;
   echo "suces";
   die();
}



//Delete Category
add_action('wp_ajax_deleteCTACategory', 'deleteCTACategory');
add_action('wp_ajax_nopriv_deleteCTACategory', 'deleteCTACategory');
function deleteCTACategory()
{
   $qcategory_id    = $_POST['qcategory_id'];
   $where = array('qcategory_id' => $qcategory_id);
   global $wpdb;
   $qtest_table = $wpdb->prefix . "cta_category";
   $wpdb->delete($qtest_table, $where);
   $result = $wpdb->get_results("SELECT * FROM wp_cta_question where qcategory_id ='" . $qcategory_id . "'");
   foreach ($result as   $value) {
      $wpdb->delete('wp_cta_question', array('qtest_id' => $value->qtest_id));
   }
   echo "suces";
   die();
}


//Save Quiz
add_action('wp_ajax_saveCTATest', 'saveCTATest');
add_action('wp_ajax_nopriv_saveCTATest', 'saveCTATest');
function saveCTATest(){

   $a_option1        = $_POST['a_option_1'];
   $qcategory_id     = $_POST['qcategory_id'];
   $is_unseen1       = $_POST['is_unseen_1'];
   if ($is_unseen1 == '1') {
      $unseen_passage1 = $_POST['unseen_passage_1'];
   } else {
      $unseen_passage1 = '';
   }
   if (!empty($_FILES["quiz_image_1"]["name"])) {
      $str3         = $_FILES["quiz_image_1"]["name"];
      $extension3   = end(explode(".", $str3));
      $newfilename3 = "IMG_" . time() . "." . $extension3;
      move_uploaded_file($_FILES['quiz_image_1']['tmp_name'], plugin_dir_path(__FILE__) . 'assets/quizImage/' . $newfilename3);
      $quiz_tile1    = $newfilename3;
      $quiz_type1    = '1';
   } else {
      $quiz_tile1    = $_POST['quiz_tile_1'];
      $quiz_type1    = '0';
   }
   $a_option1          = $_POST['a_option_1'];
   $a_explain1         = $_POST['a_explain_1'];
   $b_option1          = $_POST['b_option_1'];
   $b_explain1         = $_POST['b_explain_1'];
   $c_option1          = $_POST['c_option_1'];
   $c_explain1         = $_POST['c_explain_1'];
   $d_option1          = $_POST['d_option_1'];
   $d_explain1         = $_POST['d_explain_1'];
   $e_option1          = $_POST['e_option_1'];
   $e_explain1         = $_POST['e_explain_1'];
   $right_answer1      = $_POST['right_answer_1'];
   $answer_hint1       = $_POST['answer_hint_1'];
   $questions_explain1 = $_POST['questions_explain_1'];
   $answer_explain1    = $_POST['answer_explain_1'];
   $qcategory_id1      = $_POST['qcategory_id_1'];
   $hard_level1        = $_POST['hard_level_1'];
   $add_date           = date('Y-m-d H:i:s');
   $data1            = array('qcategory_id' => $qcategory_id, 'is_unseen' => $is_unseen1, 'unseen_passage' => $unseen_passage1, 'quiz_type' => $quiz_type1, 'quiz' => $quiz_tile1, 'a_option' => $a_option1, 'a_explain' => $a_explain1, 'b_option' => $b_option1, 'b_explain' => $b_explain1, 'c_option' => $c_option1, 'c_explain' => $c_explain1, 'd_option' => $d_option1, 'd_explain' => $d_explain1, 'e_option' => $e_option1, 'e_explain' => $e_explain1, 'right_answer' => $right_answer1, 'answer_hint' => $answer_hint1, 'questions_explain' => $questions_explain1, 'answer_explain' => $answer_explain1, 'hard_level' => $hard_level1, 'status' => '1', 'add_date' => $add_date);
   global $wpdb;
   $wpdb->insert('wp_cta_question', $data1);
   $lastInsertId = $wpdb->insert_id;
   $data_up      = array('question_no' => $lastInsertId);
   $where        = array('qtest_id' => $lastInsertId);
   global $wpdb;
   $wpdb->update('wp_cta_question', $data_up, $where);
   $qcategory_id2     = $_POST['qcategory_id'];
   // Other Level Qutions
   for ($i = 2; $i <= 3; $i++) {
      $is_unseen     = $_POST['is_unseen_' . $i];
      if ($is_unseen == '1') {
         $unseen_passage = $_POST['unseen_passage_' . $i];
      } else {
         $unseen_passage = '';
      }
      if (!empty($_FILES["quiz_image_" . $i]["name"])) {
         $str3         = $_FILES["quiz_image_" . $i]["name"];
         $extension3   = end(explode(".", $str3));
         $newfilename3 = "IMG_" . time() . "." . $extension3;
         move_uploaded_file($_FILES['quiz_image_' . $i]['tmp_name'], plugin_dir_path(__FILE__) . 'assets/quizImage/' . $newfilename3);
         $quiz_tile    = $newfilename3;
         $quiz_type    = '1';
      } else {
         $quiz_tile    = $_POST['quiz_tile_' . $i];
         $quiz_type    = '0';
      }
      $a_option          = $_POST['a_option_' . $i];
      $a_explain         = $_POST['a_explain_' . $i];
      $b_option          = $_POST['b_option_' . $i];
      $b_explain         = $_POST['b_explain_' . $i];
      $c_option          = $_POST['c_option_' . $i];
      $c_explain         = $_POST['c_explain_' . $i];
      $d_option          = $_POST['d_option_' . $i];
      $d_explain         = $_POST['d_explain_' . $i];
      $e_option          = $_POST['e_option_' . $i];
      $e_explain         = $_POST['e_explain_' . $i];
      $right_answer      = $_POST['right_answer_' . $i];
      $answer_hint       = $_POST['answer_hint_' . $i];
      $questions_explain = $_POST['questions_explain_' . $i];
      $answer_explain    = $_POST['answer_explain_' . $i];
      $qcategory_id      = $_POST['qcategory_id_' . $i];
      $hard_level        = $_POST['hard_level_' . $i];
      $data2            = array('qcategory_id' => $qcategory_id2, 'question_no' => $lastInsertId, 'is_unseen' => $is_unseen, 'unseen_passage' => $unseen_passage, 'quiz_type' => $quiz_type, 'quiz' => $quiz_tile, 'a_option' => $a_option, 'a_explain' => $a_explain, 'b_option' => $b_option, 'b_explain' => $b_explain, 'c_option' => $c_option, 'c_explain' => $c_explain, 'd_option' => $d_option, 'd_explain' => $d_explain, 'e_option' => $e_option, 'e_explain' => $e_explain, 'right_answer' => $right_answer, 'answer_hint' => $answer_hint, 'questions_explain' => $questions_explain, 'answer_explain' => $answer_explain, 'hard_level' => $hard_level, 'status' => '1', 'add_date' => $add_date);
      global $wpdb;
      $wpdb->insert('wp_cta_question', $data2);
   }
   echo "suces";
   die();
}




//View Question Info
add_action('wp_ajax_viewQuestionInfo', 'viewQuestionInfo');
add_action('wp_ajax_nopriv_viewQuestionInfo', 'viewQuestionInfo');
function viewQuestionInfo()
{
   $qtest_id    = $_POST['qtest_id'];
   global $wpdb;
   $result = $wpdb->get_row("SELECT * FROM wp_cta_question where qtest_id ='" . $qtest_id . "'");
   $quiz_type         = $result->quiz_type;
   if ($quiz_type == '1') {
      $imagePath  = plugins_url() . "/catApp/assets/quizImage/" . $result->quiz;
      $quiz  = '<img width="127" height="50" alt="Logo"  src="' . $imagePath . '" />';
   } else {
      $quiz         = $result->quiz;
   }
   $is_unseen         = $result->is_unseen;
   $unseen_passage    = $result->unseen_passage;
   $a_option          = $result->a_option;
   $b_option          = $result->b_option;
   $c_option          = $result->c_option;
   $d_option          = $result->d_option;
   $e_option          = $result->e_option;
   $anser['a_option'] = $result->a_option;
   $anser['b_option'] = $result->b_option;
   $anser['c_option'] = $result->c_option;
   $anser['d_option'] = $result->d_option;
   $anser['e_option'] = $result->e_option;
   $right_answer      = $anser[$result->right_answer];
   $answer_hint       = $result->answer_hint;
   $questions_explain = $result->questions_explain;
   $answer_explain    = $result->answer_explain;
   $hard_level  = $result->hard_level;
   $data         = array('is_unseen' => $is_unseen, 'unseen_passage' => $unseen_passage, 'quiz_title' => $quiz, 'a_options' => $a_option, 'b_options' => $b_option, 'c_options' => $c_option, 'd_options' => $d_option, 'e_options' => $e_option, 'right_answers' => $right_answer, 'answer_hints' => $answer_hint, 'questions_explain' => $questions_explain, 'answer_explain' => $answer_explain, 'hard_level' => $hard_level);
   echo json_encode($data);
   die();
}




add_action('wp_ajax_updateQuestion', 'updateQuestion');
add_action('wp_ajax_nopriv_updateQuestion', 'updateQuestion');
function updateQuestion()
{
   $is_unseen     = $_POST['is_unseen'];
   if ($is_unseen == '1') {
      $unseen_passage = $_POST['unseen_passage'];
   } else {
      $unseen_passage = '';
   }
   $quiz_type      = $_POST['quiz_type'];
   if ($quiz_type == '1') {
      if (!empty($_FILES["quiz_image"]["name"])) {
         $str3         = $_FILES["quiz_image"]["name"];
         $extension3   = end(explode(".", $str3));
         $newfilename3 = "IMG_" . time() . "." . $extension3;
         move_uploaded_file($_FILES['quiz_image']['tmp_name'], plugin_dir_path(__FILE__) . 'assets/quizImage/' . $newfilename3);
         $quiz_tile    = $newfilename3;
      } else {
         $quiz_tile    = $_POST['old_image'];
      }
   } else {
      $quiz_tile    = $_POST['quiz_tile'];
   }

   $quiz_id      = $_POST['quiz_id'];
   $a_option     = $_POST['a_option'];
   $a_explain    = $_POST['a_explain'];
   $b_option     = $_POST['b_option'];
   $b_explain    = $_POST['b_explain'];
   $c_option     = $_POST['c_option'];
   $c_explain    = $_POST['c_explain'];
   $d_option     = $_POST['d_option'];
   $d_explain    = $_POST['d_explain'];
   $e_option     = $_POST['e_option'];
   $e_explain    = $_POST['e_explain'];

   $right_answer = $_POST['right_answer'];
   $answer_hint  = $_POST['answer_hint'];
   $answer_explain  = $_POST['answer_explain'];
   $questions_explain  = $_POST['questions_explain'];
   $hard_level   = $_POST['hard_level'];

   $data         = array('is_unseen' => $is_unseen, 'unseen_passage' => $unseen_passage, 'quiz' => $quiz_tile, 'a_option' => $a_option, 'a_explain' => $a_explain, 'b_option' => $b_option, 'b_explain' => $b_explain, 'c_option' => $c_option, 'c_explain' => $c_explain, 'd_option' => $d_option, 'd_explain' => $d_explain, 'e_option' => $e_option, 'e_explain' => $e_explain, 'right_answer' => $right_answer, 'answer_hint' => $answer_hint, 'answer_explain' => $answer_explain, 'questions_explain' => $questions_explain, 'hard_level' => $hard_level, 'status' => '1');
   $where        = array('qtest_id' => $quiz_id);
   global $wpdb;
   $wpdb->update('wp_cta_question', $data, $where);
   // echo $wpdb->last_query; die;
   echo "suces";
   die();
}


//Delete Question
add_action('wp_ajax_deleteQuestion', 'deleteQuestion');
add_action('wp_ajax_nopriv_deleteQuestion', 'deleteQuestion');
function deleteQuestion()
{
   $question_no    = $_POST['question_no'];
   $where = array('question_no' => $question_no);
   global $wpdb;
   $wpdb->delete('wp_cta_question', $where);
   echo "suces";
   die();
}



add_action('wp_ajax_CatApp_saveAnswer', 'CatApp_saveAnswer');
add_action('wp_ajax_nopriv_CatApp_saveAnswer', 'CatApp_saveAnswer');
function CatApp_saveAnswer()
{
    if (get_current_user_id() != 0) {
        $sLevel = $_POST['level'];
        $category_id = $_POST['category_id'];
        $answer_date = date('Y-m-d H:i:s');
        $wp_user_id = get_current_user_id();

        global $wpdb;
        $recID = $wpdb->get_var( "SELECT id FROM ".($wpdb->prefix . 'cta_answers')." WHERE quiz_level = '".strtolower(trim($sLevel))."' AND category_id = ".intval($category_id)." AND wp_user_id = " . $wp_user_id . "");

        //var_dump($wpdb->last_query);
        
        $wpdb->replace( $wpdb->prefix . 'cta_answers', 
            array( 
                'id'            => $recID,
                'category_id'   => $category_id,
                'wp_user_id'    => $wp_user_id,
                'user_answer'   => trim(serialize($_POST['user_answer'])),
                'quiz_level'    => strtolower($sLevel),
                'answer_date'   => trim($answer_date)
            ),
            array(
                '%d', '%d', '%d', '%s', '%s', '%s'
            )
        );

        $msg = array('msg' => 'success');
        echo json_encode($msg);
        die();
    }
    $msg = array('msg' => 'fail, user not logged in');
    echo json_encode($msg);
    die();
}
