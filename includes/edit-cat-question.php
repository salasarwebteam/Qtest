
<?php 
    $id =  $_REQUEST['id']; 
    global   $wpdb;
    $result = $wpdb->get_row("SELECT * FROM wp_cta_question where qtest_id ='".$id."'");
    $is_unseen         = $result->is_unseen;
    $unseen_passage    = $result->unseen_passage;
    $quiz_type         = $result->quiz_type;
    $quiz              = $result->quiz;
    $a_option          = $result->a_option;
    $a_explain         = $result->a_explain;
    $b_option          = $result->b_option;
    $b_explain         = $result->b_explain;
    $c_option          = $result->c_option;
    $c_explain         = $result->c_explain;
    $d_option          = $result->d_option;
    $d_explain         = $result->d_explain;
    $e_option          = $result->e_option;
    $e_explain         = $result->e_explain;
    $right_answer      = $result->right_answer;
    $answer_hint       = $result->answer_hint;
    $answer_explain    = $result->answer_explain;
    $answer_explain    = $result->answer_explain;
    $questions_explain = $result->questions_explain;
    $qcategory_id      = $result->qcategory_id;
    $hard_level        = $result->hard_level;
?>

<div class="wrap custom-class">
    <h1 class="wp-heading-inline"> Quiz One : <?php echo $hard_level; ?> Level</h1> 
</div>

<div class="question-edit-panel">
      <div class="question-title"> Level: Easy</div>
      <div class="wrap add-quiz-section">
        <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="email"> Quiz Tile:</label>
                <?php if($quiz_type == '0'){ ?>
                <textarea class="form-control" id="quiz_tile" name="quiz_tile"><?php echo $quiz; ?></textarea>
                <?php }else{ ?>
                  <input type="file" class="form-control myFileInpute" id="quiz_image" name="quiz_image"  accept="image/*" >
                  <input type="hidden" name="old_image" id="old_image" value="<?php echo $quiz; ?>">
                <?php } ?>
                <input type="hidden" name="quiz_type" id="quiz_type" value="<?php echo $quiz_type; ?>">
                <p style="color:#F00;" id="err_quiz_tile"></p>
              </div>

              <div class="checkbox">
                  <label><input type="checkbox" value="1" id="is_unseen" name="is_unseen" <?php if($is_unseen == '1'){?>checked=""<?php } ?>><b>Is Unseen Passage</b></label>
              </div>
              <div class="form-group">
                <textarea class="form-control" rows="5" id="unseen_passage" name="unseen_passage"  <?php if($is_unseen == '0'){?>disabled="" style="display:none;"<?php } ?> placeholder="Passage"><?php echo  $unseen_passage; ?></textarea>
                <p style="color:#F00;" id="err_unseen_passage"></p>
             </div>
             <div class="form-group">
                  <label for="email">Answer Hint:</label>
                  <textarea class="form-control" id="answer_hint" name="answer_hint"><?php echo $answer_hint; ?></textarea>
                  <p style="color:#F00;" id="err_answer_hint"></p>
              </div>
              <div class="form-group">
                <label for="email">Right Answer:</label>
                <select class="form-control" id="right_answer" name="right_answer">
                  <option value="">Select Right Answer</option>
                  <option value="a_option" <?php if($right_answer == 'a_option'){ ?> selected <?php } ?> >Option 1</option>
                  <option value="b_option" <?php if($right_answer == 'b_option'){ ?> selected <?php } ?> >Option 2</option>
                  <option value="c_option" <?php if($right_answer == 'c_option'){ ?> selected <?php } ?> >Option 3</option>
                  <option value="d_option" <?php if($right_answer == 'd_option'){ ?> selected <?php } ?> >Option 4</option>
                  <option value="e_option" <?php if($right_answer == 'e_option'){ ?> selected <?php } ?> >Option 5</option>
                </select>
                <p style="color:#F00;" id="err_right_answer"></p>
              </div>
              <div class="form-group">
                <label for="email">Question Analysis:</label>
                <textarea class="form-control" name="questions_explain" id="questions_explain"><?php echo $questions_explain; ?></textarea>
                <p style="color:#F00;" id="err_questions_explain"></p>
              </div>
              <div class="form-group">
                <label for="email">Choice Explanations :</label>
                <textarea class="form-control" name="answer_explain" id="answer_explain"><?php echo $answer_explain; ?></textarea>
                <p style="color:#F00;" id="err_answer_explain"></p>
              </div>

            </div>







            <div class="col-sm-5 divider">
              <div id="option-container">
                  <div class="options-section">
                      <div class="form-group">
                          <label for="email">Options 1:</label>
                           <textarea class="form-control" id="a_option" name="a_option"><?php echo $a_option; ?></textarea>
                           <p style="color:#F00;" id="err_a_option"></p>
                      </div>
                      <div class="form-group">
                          <label for="email">Options 1 Explanations:</label>
                          <textarea class="form-control" rows="2" id="a_explain" name="a_explain"><?php echo $a_explain; ?></textarea>
                          <p style="color:#F00;" id="err_a_explain"></p>
                     </div>
                  </div>
                  <div class="options-section">
                      <div class="form-group">
                          <label for="email">Options 2:</label>
                           <textarea class="form-control" id="b_option" name="b_option"><?php echo $b_option; ?></textarea>
                          <p style="color:#F00;" id="err_b_option"></p>
                      </div>
                      <div class="form-group">
                          <label for="email">Options 2 Explanations:</label>
                          <textarea class="form-control" rows="2" id="b_explain" name="b_explain"><?php echo $b_explain; ?></textarea>
                          <p style="color:#F00;" id="err_b_explain"></p>
                     </div>
                  </div>
                  <div class="options-section">
                      <div class="form-group">
                          <label for="email">Options 3:</label>
                          <textarea class="form-control" id="c_option" name="c_option"><?php echo $c_option; ?></textarea>
                          <p style="color:#F00;" id="err_c_option"></p>
                      </div>
                      <div class="form-group">
                          <label for="email">Options 3 Explanations:</label>
                          <textarea class="form-control" rows="2" id="c_explain" name="c_explain"><?php echo $c_explain; ?></textarea>
                          <p style="color:#F00;" id="err_c_explain"></p>
                      </div>
                  </div>
                  <div class="options-section">
                      <div class="form-group">
                          <label for="email">Options 4:</label>
                          <textarea class="form-control" id="d_option" name="d_option"><?php echo $d_option; ?></textarea>
                          <p style="color:#F00;" id="err_d_option"></p>
                      </div>
                      <div class="form-group">
                          <label for="email">Options 4 Explanations:</label>
                          <textarea class="form-control" rows="2" id="d_explain" name="d_explain"><?php echo $d_explain; ?></textarea>
                          <p style="color:#F00;" id="err_d_explain"></p>
                      </div>
                  </div>
                  <div class="options-section">
                      <div class="form-group">
                        <label for="email">Options 5:</label>
                        <textarea class="form-control" id="e_option" name="e_option"><?php echo $e_option; ?></textarea>
                      </div>
                      <div class="form-group">
                        <label for="email">Options 5 Explanations:</label>
                        <textarea class="form-control" rows="2" id="e_explain" name="e_explain"><?php echo $e_explain; ?></textarea>
                        <p style="color:#F00;" id="err_e_explain"></p>
                      </div>
                  </div>
              </div>
            </div>
              <div class="row">
                <div class="col-sm-12">
                   <hr style="float:left; width:100%;border-top:1px solid #ccc;">
                  <input type="hidden" name="quiz_id" id="quiz_id" value="<?php echo $id; ?>">
                  <input type="hidden" name="urls" id="urls" value="<?php echo admin_url('admin-ajax.php'); ?>">
                  <input type="hidden" name="qcategory_id" id="qcategory_id" value="<?php echo $qcategory_id; ?>">
                  <input type="hidden" name="hard_level" id="hard_level" value="<?php echo $hard_level; ?>">
                  <button type="button" class="btn btn-primary" onclick="editQuestion()">Update Question</button>
                  <a href="?page=question-list&id=<?php echo $qcategory_id; ?>&level=<?php echo $hard_level; ?>" class="btn btn-danger">Back</a>
                </div>
              </div> 

          </div>
      </div>
   </div>

