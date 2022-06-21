<div class="wrap custom-class">
    <h1 class="wp-heading-inline"> Cat App Question </h1> 
</div>


<!------------------First section (Easy Label) ----------------------------->
<div class="mycontainer" id="container_1">
<div class="question-edit-panel">
   <div class="question-title"> Level: Easy</div>
      <div class="wrap add-quiz-section">
         <div class="row">
            <!-----------left sec----------->
            <div class="col-sm-6">
               <div class="form-group">
                  <label for="email"> Quiz Tile:</label>
                  <textarea class="form-control myInputes" rows="1" id="quiz_tile_1" name="quiz_tile_1"></textarea>
                  <p style="color:#F00;" id="err_quiz_tile_1"></p>
               </div>
               <div class="form-group">
                  <label for="email">OR</label>
               </div>

               <div class="form-group">
                  <label for="email"> Quiz Image:</label>
                  <input type="file" class="form-control myFileInpute" id="quiz_image_1" name="quiz_image_1"  accept="image/*" style=" padding: 5px 4px 38px 5px;">
                  <p style="color:#F00;" id="err_quiz_image_1"></p>
               </div>

               <div class="checkbox">
                  <label><input type="checkbox" value="1" id="is_unseen_1" name="is_unseen_1"><b>Is Unseen Passage</b></label>
               </div>
               <div class="form-group">
                  <textarea class="form-control" rows="5" id="unseen_passage_1" name="unseen_passage_1" disabled="" placeholder="Passage" style="display:none;"></textarea>
                  <p style="color:#F00;" id="err_unseen_passage_1"></p>
               </div>
               <div class="form-group">
                  <label for="email">Answer Hint:</label>
                  <textarea class="form-control" rows="6" id="answer_hint_1" name="answer_hint_1"></textarea>
                  <p style="color:#F00;" id="err_answer_hint_1"></p>
               </div>
                <div class="form-group">
                  <label for="email">Right Answer:</label>
                  <select class="form-control" id="right_answer_1" name="right_answer_1">
                     <option value="">Select Right Answer</option>
                     <option value="a_option">Option 1</option>
                     <option value="b_option">Option 2</option>
                     <option value="c_option">Option 3</option>
                     <option value="d_option">Option 4</option>
                     <option value="e_option">Option 5</option>
                  </select>
                  <p style="color:#F00;" id="err_right_answer_1"></p>
               </div>
               <div class="form-group">
                  <label for="email">Question Analysis :</label>
                     <textarea class="form-control" name="questions_explain_1" id="questions_explain_1"></textarea>
                  <p style="color:#F00;" id="err_questions_explain_1"></p>
               </div>

               <div class="form-group">
                  <label for="email">Choice Explanations :</label>
                  <textarea class="form-control" name="answer_explain_1" id="answer_explain_1"></textarea>
                  <p style="color:#F00;" id="err_answer_explain_1"></p>
               </div>
            <!-----------end left----------->
            </div>
            <!-----------right sec----------->
            <div class="col-sm-5 divider">
               <div id="option-container">
                  <div class="options-section">
                     <div class="form-group">
                        <label for="email">Options 1:</label>
                         <textarea rows="1" class="form-control" rows="1" id="a_option_1" name="a_option_1"></textarea>
                        <p style="color:#F00;" id="err_a_option_1"></p>
                     </div>
                     <div class="form-group">
                        <label for="email">Options 1 Explanations:</label>
                         <textarea rows="1" class="form-control" rows="2" id="a_explain_1" name="a_explain_1"></textarea>
                        <p style="color:#F00;" id="err_a_explain_1"></p>
                     </div>
                  </div>
                  <div class="options-section">
                     <div class="form-group">
                        <label for="email">Options 2:</label>
                        <textarea rows="1" class="form-control" rows="1" id="b_option_1" name="b_option_1"></textarea>
                        <p style="color:#F00;" id="err_b_option_1"></p>
                     </div>
                     <div class="form-group">
                        <label for="email">Options 2 Explanations:</label>
                         <textarea rows="1" class="form-control" rows="2" id="b_explain_1" name="b_explain_1"></textarea>
                        <p style="color:#F00;" id="err_b_explain_1"></p>
                     </div>
                  </div>
                  <div class="options-section">
                   <div class="form-group">
                     <label for="email">Options 3:</label>
                     <textarea rows="1" class="form-control" rows="1" id="c_option_1" name="c_option_1"></textarea>
                     <p style="color:#F00;" id="err_c_option_1"></p>
                  </div>
                  <div class="form-group">
                     <label for="email">Options 3 Explanations:</label>
                      <textarea rows="1" class="form-control" rows="2" id="c_explain_1" name="c_explain_1"></textarea>
                     <p style="color:#F00;" id="err_c_explain_1"></p>
                  </div>
               </div>
               <div class="options-section">
                <div class="form-group">
                     <label for="email">Options 4:</label>
                     <textarea rows="1" class="form-control" rows="1" id="d_option_1" name="d_option_1"></textarea>
                     <p style="color:#F00;" id="err_d_option_1"></p>
                  </div>
                  <div class="form-group">
                     <label for="email">Options 4 Explanations:</label>
                      <textarea rows="1" class="form-control" rows="2" id="d_explain_1" name="d_explain_1"></textarea>
                     <p style="color:#F00;" id="err_d_explain_1"></p>
                  </div>
               </div>
               <div class="options-section">
                  <div class="form-group">
                     <label for="email">Options 5:</label>
                     <textarea rows="1" class="form-control" rows="1" id="e_option_1" name="e_option_1"></textarea>
                  </div>
                  <div class="form-group">
                     <label for="email">Options 5 Explanations:</label>
                      <textarea rows="1" class="form-control" rows="2" id="e_explain_1" name="e_explain_1"></textarea>
                     <p style="color:#F00;" id="err_e_explain_1"></p>
                  </div>
               </div>
            </div>
            </div>
            <!---------end right section------------->
            <div class="row">
               <div class="col-sm-12">
                  <hr style="float:left; width:100%;border-top:1px solid #ccc;">
                  <input type="hidden" name="urls" id="urls" value="<?php echo admin_url('admin-ajax.php'); ?>">
                  <input type="hidden" name="hard_level_1" id="hard_level_1" value="easy">
                  <button type="button" class="btn btn-primary" onclick="addQuestion('1')">Next </button>
                   <a href="?page=cat-question-list&id=<?php echo $_REQUEST['id']; ?>&level=easy" class="btn btn-danger">Back to Question</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>


<!------------------Second Section  (Medimum Label) ----------------------------->
<!-- 2 -->
<div class="mycontainer" style="display: none;" id="container_2"> 

   <div class="question-edit-panel">
      <div class="question-title"> Level: Medium</div>
      <div class="wrap add-quiz-section">
         <div class="row">
            <!-----------left sec----------->
            <div class="col-sm-6">
               <div class="form-group">
                  <label for="email"> Question Tile:</label>
                  <textarea class="form-control myInputes" rows="1" id="quiz_tile_2" name="quiz_tile_2"></textarea>
                  <p style="color:#F00;" id="err_quiz_tile_2"></p>
               </div>

               <div class="form-group"> <label for="email">OR</label></div>

               <div class="form-group">
                  <label for="email"> Quiz Image:</label>
                  <input type="file" class="form-control myFileInpute" id="quiz_image_2" name="quiz_image_2"  accept="image/*" style=" padding: 5px 4px 38px 5px;">
                  <p style="color:#F00;" id="err_quiz_image_2"></p>
               </div>

               <div class="checkbox">
                  <label><input type="checkbox" value="1" id="is_unseen_2" name="is_unseen_2"><b>Is Unseen Passage</b></label>
               </div>

               <div class="form-group">
                  <textarea class="form-control" rows="5" id="unseen_passage_2" name="unseen_passage_2" disabled="" placeholder="Passage"></textarea>
                  <p style="color:#F00;" id="err_unseen_passage_2"></p>
               </div>
               <div class="form-group">
                  <label for="email">Answer Hint:</label>
                  <textarea class="form-control" rows="6" id="answer_hint_2" name="answer_hint_2"></textarea>
                  <p style="color:#F00;" id="err_answer_hint_2"></p>
               </div>

               <div class="form-group">
                  <label for="email">Right Answer:</label>
                  <select class="form-control" id="right_answer_2" name="right_answer_2">
                     <option value="">Select Right Answer</option>
                     <option value="a_option">Option 1</option>
                     <option value="b_option">Option 2</option>
                     <option value="c_option">Option 3</option>
                     <option value="d_option">Option 4</option>
                     <option value="e_option">Option 5</option>
                  </select>
                  <p style="color:#F00;" id="err_right_answer_2"></p>
               </div>

               <div class="form-group">
                  <label for="email">Question Analysis :</label>
                     <textarea class="form-control" name="questions_explain_2" id="questions_explain_2"></textarea>
                  <p style="color:#F00;" id="err_questions_explain_2"></p>
               </div>

               <div class="form-group">
                  <label for="email">Choice Explanations :</label>
                  <textarea class="form-control" name="answer_explain_2" id="answer_explain_2"></textarea>
                  <p style="color:#F00;" id="err_answer_explain_2"></p>
               </div>


            </div>
             <!-----------Right sec----------->
            <div class="col-sm-5 divider"> 
               <div id="option-container">
                  <div class="options-section">
                       <div class="form-group">
                           <label for="email">Options 1:</label>
                            <textarea class="form-control" rows="1" id="a_option_2" name="a_option_2"></textarea>
                           <p style="color:#F00;" id="err_a_option_2"></p>
                        </div>
                        <div class="form-group">
                           <label for="email">Options 1 Explanations:</label>
                            <textarea class="form-control" rows="1" id="a_explain_2" name="a_explain_2"></textarea>
                           <p style="color:#F00;" id="err_a_explain_2"></p>
                        </div>
                  </div>

                  <div class="options-section">
                     <div class="form-group">
                        <label for="email">Options 2:</label>
                        <textarea class="form-control" rows="1" id="b_option_2" name="b_option_2"></textarea>
                        <p style="color:#F00;" id="err_b_option_2"></p>
                     </div>
                     <div class="form-group">
                        <label for="email">Options 2 Explanations:</label>
                         <textarea class="form-control" rows="1" id="b_explain_2" name="b_explain_2"></textarea>
                        <p style="color:#F00;" id="err_b_explain_2"></p>
                     </div> 
                  </div>

                  <div class="options-section">
                    <div class="form-group">
                        <label for="email">Options 3:</label>
                        <textarea class="form-control" rows="1" id="c_option_2" name="c_option_2"></textarea>
                        <p style="color:#F00;" id="err_c_option_2"></p>
                     </div>
                     <div class="form-group">
                        <label for="email">Options 3 Explanations:</label>
                         <textarea class="form-control" rows="1" id="c_explain_2" name="c_explain_2"></textarea>
                        <p style="color:#F00;" id="err_c_explain_2"></p>
                     </div>
                  </div>

                  <div class="options-section">
                     <div class="form-group">
                        <label for="email">Options 4:</label>
                        <textarea class="form-control" rows="1" id="d_option_2" name="d_option_2"></textarea>
                        <p style="color:#F00;" id="err_d_option_2"></p>
                     </div>
                     <div class="form-group">
                        <label for="email">Options 4 Explanations:</label>
                         <textarea class="form-control" rows="1" id="d_explain_2" name="d_explain_2"></textarea>
                        <p style="color:#F00;" id="err_d_explain_2"></p>
                     </div>
                  </div>

                  <div class="options-section">
                     <div class="form-group">
                        <label for="email">Options 5:</label>
                        <textarea class="form-control" rows="1" id="e_option_2" name="e_option_2"></textarea>
                     </div>
                     <div class="form-group">
                        <label for="email">Options 5 Explanations:</label>
                         <textarea class="form-control" rows="1" id="e_explain_2" name="e_explain_2"></textarea>
                        <p style="color:#F00;" id="err_e_explain_2"></p>
                     </div>
                  </div>
               </div>
            </div>

               <div class="row">
                  <div class="col-sm-12">
                     <hr style="float:left; width:100%;border-top:1px solid #ccc;">
                     <input type="hidden" name="urls" id="urls" value="<?php echo admin_url('admin-ajax.php'); ?>">
                      <input type="hidden" name="hard_level_2" id="hard_level_2" value="medium">
                     <button type="button" class="btn btn-primary" onclick="addQuestion('2')">Next </button>
                     <button type="button" class="btn btn-danger" onclick="backPreviousLevel('1')">Back</button>
                  </div>
               </div>
        </div>
      </div>
   </div>
</div>



<!------------------Third Section  (Hard Label) ----------------------------->
<!-- 3 -->
<div class="mycontainer" style="display: none;" id="container_3"> 
    <div class="question-edit-panel">
      <div class="question-title"> Level: Hard</div>
      <div class="wrap add-quiz-section">
         <div class="row">
            <div class="col-sm-6"> 
               <div class="form-group">      
                  <label for="email"> Quiz Tile:</label>
                  <textarea class="form-control myInputes" rows="1" id="quiz_tile_3" name="quiz_tile_3"></textarea>
                  <p style="color:#F00;" id="err_quiz_tile_3"></p>
               </div>
               <div class="form-group"><label for="email">OR</label></div>
               <div class="form-group">
                  <label for="email"> Quiz Image:</label>
                  <input type="file" class="form-control myFileInpute" id="quiz_image_3" name="quiz_image_3"  accept="image/*" style=" padding: 5px 4px 38px 5px;">
                  <p style="color:#F00;" id="err_quiz_image_3"></p>
               </div>
               <div class="checkbox">
                  <label><input type="checkbox" value="1" id="is_unseen_3" name="is_unseen_3"><b>Is Unseen Passage</b></label>
               </div>
               <div class="form-group">
                  <textarea class="form-control" rows="5" id="unseen_passage_3" name="unseen_passage_3" disabled="" placeholder="Passage"></textarea>
                  <p style="color:#F00;" id="err_unseen_passage_3"></p>
               </div>
               <div class="form-group">
                  <label for="email">Answer Hint:</label>
                  <textarea class="form-control" rows="6" id="answer_hint_3" name="answer_hint_3"></textarea>
                  <p style="color:#F00;" id="err_answer_hint_3"></p>
               </div>
                <div class="form-group">
                  <label for="email">Right Answer:</label>
                  <select class="form-control" id="right_answer_3" name="right_answer_3">
                     <option value="">Select Right Answer</option>
                     <option value="a_option">Option 1</option>
                     <option value="b_option">Option 2</option>
                     <option value="c_option">Option 3</option>
                     <option value="d_option">Option 4</option>
                     <option value="e_option">Option 5</option>
                  </select>
                  <p style="color:#F00;" id="err_right_answer_3"></p>
               </div>
               <div class="form-group">
                  <label for="email">Question Analysis :</label>
                     <textarea class="form-control" name="questions_explain_3" id="questions_explain_3"></textarea>
                  <p style="color:#F00;" id="err_questions_explain_3"></p>
               </div>
               <div class="form-group">
                  <label for="email">Choice Explanations :</label>
                  <textarea class="form-control" name="answer_explain_3" id="answer_explain_3"></textarea>
                  <p style="color:#F00;" id="err_answer_explain_3"></p>
               </div>


            </div>


            <div class="col-sm-5 divider">
               <div id="option-container">
                  
                  <div class="options-section">
                     <div class="form-group">
                        <label for="email">Options 1:</label>
                         <textarea class="form-control" rows="1" id="a_option_3" name="a_option_3"></textarea>
                        <p style="color:#F00;" id="err_a_option_3"></p>
                     </div>
                     <div class="form-group">
                        <label for="email">Options 1 Explanations:</label>
                         <textarea class="form-control" rows="2" id="a_explain_3" name="a_explain_3"></textarea>
                        <p style="color:#F00;" id="err_a_explain_3"></p>
                     </div>
                  </div>


                  <div class="options-section">
                     <div class="form-group">
                        <label for="email">Options 2:</label>
                        <textarea class="form-control" rows="1" id="b_option_3" name="b_option_3"></textarea>
                        <p style="color:#F00;" id="err_b_option_3"></p>
                     </div>
                     <div class="form-group">
                        <label for="email">Options 2 Explanations:</label>
                         <textarea class="form-control" rows="2" id="b_explain_3" name="b_explain_3"></textarea>
                        <p style="color:#F00;" id="err_b_explain_3"></p>
                     </div>
                  </div>

                  <div class="options-section">
                     <div class="form-group">
                        <label for="email">Options 3:</label>
                        <textarea class="form-control" rows="1" id="c_option_3" name="c_option_3"></textarea>
                        <p style="color:#F00;" id="err_c_option_3"></p>
                     </div>
                     <div class="form-group">
                        <label for="email">Options 3 Explanations:</label>
                         <textarea class="form-control" rows="2" id="c_explain_3" name="c_explain_3"></textarea>
                        <p style="color:#F00;" id="err_c_explain_3"></p>
                     </div>   
                  </div>

                  <div class="options-section">
                     <div class="form-group">
                        <label for="email">Options 4:</label>
                        <textarea class="form-control" rows="1" id="d_option_3" name="d_option_3"></textarea>
                        <p style="color:#F00;" id="err_d_option_3"></p>
                     </div>
                     <div class="form-group">
                        <label for="email">Options 4 Explanations:</label>
                         <textarea class="form-control" rows="2" id="d_explain_3" name="d_explain_3"></textarea>
                        <p style="color:#F00;" id="err_d_explain_3"></p>
                     </div>
                  </div>
                  <div class="options-section">
                     <div class="form-group">
                        <label for="email">Options 5:</label>
                        <textarea class="form-control" rows="1" id="e_option_3" name="e_option_3"></textarea>
                     </div>
                     <div class="form-group">
                        <label for="email">Options 5 Explanations:</label>
                         <textarea class="form-control" rows="2" id="e_explain_3" name="e_explain_3"></textarea>
                        <p style="color:#F00;" id="err_e_explain_3"></p>
                     </div>
                  </div>
               </div>
               </div>
               <div class="row">
                  <div class="col-sm-12">
                     <hr style="float:left; width:100%;border-top:1px solid #ccc;">
                     <input type="hidden" name="urls" id="urls" value="<?php echo admin_url('admin-ajax.php'); ?>">
                     <input type="hidden" name="hard_level_3" id="hard_level_3" value="hard">
                     <input type="hidden" name="qcategory_id" id="qcategory_id" value="<?php echo $_REQUEST['id']; ?>">
                     <button type="button" class="btn btn-primary" onclick="addQuestion('3')">Submit </button>
                     <button type="button" class="btn btn-danger" onclick="backPreviousLevel('2')">Back</button>
                  </div>
               </div>

            
          </div>
       </div>
    </div>

   

</div>


