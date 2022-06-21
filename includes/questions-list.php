<div class="wrap custom-class">
    <h1 class="wp-heading-inline"> Questions List <a href="?page=add-cat-question&id=<?php echo $_REQUEST['id'] ?>" class="page-title-action">Add Cat Question</a></h1> 
</div>


<div class="wrap catapp" style="margin-left: 0;margin-top: 25px;">
    <?php  $msg =  $_REQUEST['msg']; 
        if($msg == 'suc'){   
     ?>
  <div class="alert alert-success alert-dismissible fade in flasMsg">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Success!</strong> Questions success fully added.
  </div>
 <?php  } ?>
<div class="row" style="padding-bottom: 15px;">
         <div class="col-sm-6">
           <?php  
              $level = $_REQUEST['level']; 

              if(!empty($_REQUEST['level']) && !empty($_REQUEST['id']) ){
                $class1 = $level == 'easy' ? 'btn-active' : 'page-title-action';
                $class2 = $level == 'medium' ? 'btn-active' : 'page-title-action';
                $class3 = $level == 'hard' ? 'btn-active' : 'page-title-action';
                global $wpdb;
                $result = $wpdb->get_results("SELECT * FROM wp_cta_question where qcategory_id = ".$_REQUEST['id']." AND hard_level='".$level."' ORDER BY qtest_id DESC");
            ?>
           <a href="?page=cat-question-list&id=<?php echo $_REQUEST['id'] ?>&level=easy"><button type="button" class="<?php echo $class1; ?>">Easy</button></a>
           <a href="?page=cat-question-list&id=<?php echo $_REQUEST['id'] ?>&level=medium"><button type="button" class="<?php echo $class2; ?>">Medium</button></a>
           <a href="?page=cat-question-list&id=<?php echo $_REQUEST['id'] ?>&level=hard"><button type="button" class="<?php echo $class3; ?>">Hard</button></a>

          <?php }else{ 
            global $wpdb;
            $result = $wpdb->get_results("SELECT * FROM wp_cta_question ORDER BY qtest_id DESC");
          }  ?>
         </div>
         
</div>    
 
<table id="example" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th style="width: 6%;">No.</th>
                <th style="width: 30%;">Quiz Title</th>
                <th style="width: 10%;">Hard Level</th> 
                <th style="width: 20%;">Right Answer</th>
                <th style="width: 13%;">Answer Hint</th>
                <th style="width: 10%;">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php  
              $i=0;
               foreach ($result as $row) { $i++;
                  $myoption = array();
                  $myoption['a_option'] =  $row->a_option;
                  $myoption['b_option'] =  $row->b_option;
                  $myoption['c_option'] =  $row->c_option;
                  $myoption['d_option'] =  $row->d_option;
                  $myoption['e_option'] =  $row->e_option;
                ?>
            <tr id="quiz_id_<?php echo $row->qtest_id; ?>">
                <td><?php echo $i; ?>.</td>
                <td>
                  <?php if($row->quiz_type == '1'){
                    $imagePath  =plugins_url()."/qTest/assets/quizImage/".$row->quiz; 
                    echo '<img width="127" height="50" alt="Logo"  src="'.$imagePath.'" />';
                  }else{ echo $row->quiz; }  ?></td>
                 <td><?php echo $row->hard_level; ?></td> 
                <td><?php echo $myoption[$row->right_answer]; ?></td>
                <td><?php echo $row->answer_hint; ?></td>
                <td>
                    <button type="button" class="page-title-action" onclick="viewQuestionInfo('<?php echo $row->qtest_id; ?>')"><i class="fa fa-eye" aria-hidden="true"></i></button>
                    <a href="?page=edit-cat-question&id=<?php echo $row->qtest_id; ?>"><button type="button" class="page-title-action"><i class="fa fa-pencil" aria-hidden="true"></i></button></a>
                    <button type="button" class="page-title-action" onclick="deleteConformations('<?php echo $row->question_no; ?>','<?php echo $row->hard_level; ?>')"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                </td>
            </tr>
        <?php } ?>
           </tbody>
    </table>
</div>
 <input type="hidden" name="urls" id="urls" value="<?php echo admin_url('admin-ajax.php'); ?>">
<!-- Modal -->
  <div class="modal fade" id="myDeleModal" role="dialog">
    <div class="modal-dialog modal-sm">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Confirmation </h4>
        </div>
        <div class="modal-body">
          <p>Are you sure you want delete this ?</p>
        </div>
        <div class="modal-footer">
          <input type="hidden" name="question_no" id="question_no">
          <input type="hidden" name="hard_level" id="hard_level">
          <input type="hidden" name="qcategory_id" id="qcategory_id" value="<?php echo $_REQUEST['id']; ?>">
          <button type="button" class="btn btn-danger" id="deleteQuestionYes">Yes</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="myViewQuizInfo" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="text-align: center;">Quiz Info </h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6" id="is_unseen">
              <p id="unseen_passage"></p>
              <p id="myqExplain_1" style="display: none;"><b>Questions Explain</b> <small id="questions_explain_1"></small></p>
              <p><b>Hard Level  : </b> <small id="hard_level"></small></p>
            </div>
            <div class="col-sm-12" id="quiz_info">
                 <p><b id="quiz_title"></b></p>
                  <p id="a_option"></p>
                  <p id="b_option"></p>
                  <p id="c_option"></p>
                  <p id="d_option"></p>
                  <p id="e_option"></p>
                  <p><b>Right Answer : </b> <small id="right_answer"></small></p>
                  <p><b>Answer Hint  : </b> <small id="answer_hint"></small></p>
                  <p style="display: none;" id="myqExplain_2"><b>Questions Explain</b> <small id="questions_explain_2"></small></p>
                  <p><b>Explain Right Answer  : </b> <small id="answer_explain"></small></p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
   <script type="text/javascript">
       jQuery(document).ready(function() {
        jQuery('#example').DataTable();
        } );
   </script>