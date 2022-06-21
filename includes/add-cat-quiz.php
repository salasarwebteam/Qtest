<?php 
 
   $id =  $_REQUEST['id']; 
   if(!empty($id)){
    global   $wpdb;
        $result = $wpdb->get_row("SELECT * FROM wp_cta_category where qcategory_id ='".$id."'");
   }

 ?>

<div class="wrap custom-class">
    <h1 class="wp-heading-inline"> <?php if(!empty($id)){ echo 'Edit Cat Quiz'; }else{ echo 'Add New Cat Quiz';}?> </h1> 
</div>
<div class="question-edit-panel">
    <div class="question-title"> Cat Quiz Test</div>
    <div class="wrap add-quiz-section">
        <div class="row">
            <div class="col-sm-10">
                <div class="form-group">
                    <div class="col-sm-4">
                        <label for="email">Quiz Title:</label>
                    </div>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="category_title" name="category_title" value="<?php if(!empty($result->category_title)){ echo $result->category_title; } ?>">
                        <p style="color:#F00;" id="err_category_title"></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-10">
                <div class="form-group">
                    <div class="col-sm-4">
                        <label for="email">Main Height (In Px):</label>
                    </div>
                    <div class="col-sm-6">
                       <input type="text" class="form-control" id="test_height" name="test_height" value="<?php if(!empty($result->test_height)){ echo $result->test_height; } ?>">
                    <p style="color:#F00;" id="err_test_height"></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-10">
                <div class="form-group">
                    <div class="col-sm-4">
                    <label for="email">Test Mode Height (In Px) :</label>
                    </div>
                    <div class="col-sm-6">
                        <input type="hidden" id="ajax_urls" value="<?php echo admin_url('admin-ajax.php'); ?>">
                        <input type="text" class="form-control" id="test_mode_height" name="test_mode_height" value="<?php if(!empty($result->test_mode_height)){ echo $result->test_mode_height; } ?>">
                        <p style="color:#F00;" id="err_test_mode_height"></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-10">
                <div class="form-group">
                    <div class="col-sm-4">
                    <label for="email">Explanation Mode Height (In Px):</label></div>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="explanation_mode_height" name="explanation_mode_height" value="<?php if(!empty($result->explanation_mode_height)){ echo $result->explanation_mode_height; } ?>">
                        <p style="color:#F00;" id="err_explanation_mode_height"></p>
                    </div>
                </div>
            </div>

            <div class="col-sm-10">
                <div class="form-group">
                    <div class="col-sm-4">
                    <label for="email">Directions:</label></div>
                    <div class="col-sm-6">
                        <textarea class="form-control" id="quiz_directions" name="quiz_directions"><?php if(!empty($result->directions)){ echo $result->directions; } ?></textarea>
                        <p style="color:#F00;" id="err_quiz_directions"></p>
                    </div>
                </div>
            </div>


        </div>
        <div class="modal-footer">
            <div class="col-sm-8">
                 <?php if(!empty($id)){  ?>

                    <div id="myUpCategoryButtons">
                    <input type="hidden" name="qcategory_id" id="qcategory_id" value="<?php echo $id; ?>">
                    <button type="button" class="btn btn-success" onclick="updateCatQuiz()">Update Quiz</button>
                    <a href="?page=catapp-quiz-list" class="btn btn-danger" data-dismiss="modal">Back</a>
                </div>
                <div id="waitUpCategoryButtons" style="display: none;">
                    <button class="buttonload btn btn-default" disabled="">
                        <i class="fa fa-spinner fa-spin"></i> Please wait
                    </button>
                </div>

                <?php  }else{  ?>   
                 
                <div id="myCategoryButtons">
                    <button type="button" class="btn btn-success" onclick="saveCTACategory()">Create Quiz</button>
                    <a href="?page=catapp-quiz-list" class="btn btn-danger" data-dismiss="modal">Back</a>
                </div>
                <div id="waitCategoryButtons" style="display: none;">
                    <button class="buttonload btn btn-default" disabled="">
                        <i class="fa fa-spinner fa-spin"></i> Please wait
                    </button>
                </div>
               


                <?php } ?>

            </div>
        </div>
</div>
     
