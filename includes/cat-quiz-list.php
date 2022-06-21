<div class="wrap custom-class">
    <h1 class="wp-heading-inline"> Cat App List <a href="?page=add-cat-quiz" class="page-title-action">Add Cat Quiz</a></h1> 
</div>

<div class="wrap catapp">
    <?php $msg =  $_REQUEST['msg'];
    if ($msg == 'suc') {
        ?>
        <div class="alert alert-success alert-dismissible fade in flasMsg">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Success!</strong> Test success fully added.
        </div>
    <?php  } ?>
    <?php
    if ($msg == 'suce') {
        ?>
        <div class="alert alert-success alert-dismissible fade in flasMsg">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Success!</strong> Question success fully added on test.
        </div>
    <?php  } ?>

    <table id="example" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th width="5%">No.</th>
                <th>Test Title</th>
                <th width="10%" style="text-align: center;">Total Quiz </th>
                <th width="18%" style="text-align: center;">Short codes</th>
                <th width="22%" style="text-align: center;">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php

            $i = 0;
            foreach ($result as $row) {
                $i++; ?>
                <tr id="qcategory_id_<?php echo $row->qcategory_id; ?>">
                    <td><?php echo $i; ?>.</td>
                    <td><?php echo $row->category_title; ?>

                        <input type="hidden" name="test_height" id="test_height_<?php echo $row->qcategory_id; ?>" value="<?php echo $row->test_height; ?>">
                        <input type="hidden" name="test_mode_height" id="test_mode_height_<?php echo $row->qcategory_id; ?>" value="<?php echo $row->test_mode_height; ?>">
                        <input type="hidden" name="explanation_mode_height" id="explanation_mode_height_<?php echo $row->qcategory_id; ?>" value="<?php echo $row->explanation_mode_height; ?>">
                        <textarea id="category_title_<?php echo $row->qcategory_id; ?>" style="display: none;"><?php echo $row->category_title; ?></textarea>
                        <textarea id="directions_<?php echo $row->qcategory_id; ?>" style="display: none;"><?php echo $row->directions; ?></textarea>
                    </td>
                   

                    <td><?php
                            $qtest_table = $wpdb->prefix . "cta_question";
                            $result_total = $wpdb->get_var("SELECT COUNT(*) FROM $qtest_table where qcategory_id =" . $row->qcategory_id . "");
                            echo $result_total;
                            ?></td>
                    <td><input type="text" name="" value='[CatApp id="<?php echo $row->qcategory_id; ?>"]'></td>
                    <td style="line-height: 26px;text-align: center;">
                        <a href="?page=cat-question-list&id=<?php echo $row->qcategory_id; ?>&level=medium"><button type="button" class="page-title-action"><i class="fa fa-eye" aria-hidden="true"></i> Quiz</button></a>
                        <a href="?page=add-cat-question&id=<?php echo $row->qcategory_id; ?>"><button type="button" class="page-title-action"><i class="fa fa-plus-circle" aria-hidden="true"></i> Quiz</button></a>
                        <a href="?page=edit-cat-quiz&id=<?php echo $row->qcategory_id; ?>"><button type="button" class="page-title-action"><i class="fa fa-pencil" aria-hidden="true"></i> </button></a>
                        <button type="button" class="page-title-action" onclick="deleteCTATestAlert('<?php echo $row->qcategory_id; ?>')"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </td>
                </tr>
            <?php } ?>
        </tbody>
    </table>
</div>

<input type="hidden" name="urls" id="urls" value="<?php echo admin_url('admin-ajax.php'); ?>">
<!-- Modal -->
<div class="modal fade" id="myDeleCtestModal" role="dialog">
    <div class="modal-dialog modal-sm">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Confirmation </h4>
            </div>
            <div class="modal-body">
                <p> Are you sure you want delete this test? </p>
            </div>
            <div class="modal-footer">
                <input type="hidden" name="qcategory_id" id="qcategory_id">
                <button type="button" class="btn btn-danger" id="deleteCtestYes" onclick="deleteCTATest()">Yes</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->


<!-- Modal -->
<div class="modal fade" id="editCategory" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title" style="text-align: center;">Edit Category</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-12" id="quiz_info">
                        <div class="form-group">
                            <label for="email">Category Title:</label>
                            <input type="text" class="form-control" id="e_category_title" name="e_category_title">
                            <p style="color:#F00;" id="err_e_category_title"></p>
                        </div>
                    </div>
                    <div class="col-sm-12" id="quiz_info">
                        <div class="form-group">
                            <label for="email">Main Height (In Px):</label>
                            <input type="text" class="form-control" id="e_test_height" name="e_test_height">
                            <p style="color:#F00;" id="err_e_test_height"></p>
                        </div>
                    </div>
                    <div class="col-sm-12" id="quiz_info">
                        <div class="form-group">
                            <label for="email">Test Mode Height (In Px) :</label>
                            <input type="text" class="form-control" id="e_questions_test_height" name="e_questions_test_height">
                            <p style="color:#F00;" id="err_e_questions_test_height"></p>
                        </div>
                    </div>
                    <div class="col-sm-12" id="quiz_info">
                        <div class="form-group">
                            <label for="email">Explanation Mode Height (In Px) :</label>
                            <input type="text" class="form-control" id="e_questions_explanation_height" name="e_questions_explanation_height">
                            <p style="color:#F00;" id="err_e_questions_explanation_height"></p>
                        </div>
                    </div>


                    <div class="col-sm-12" id="quiz_info">
                        <div class="form-group">
                            <label for="email">Directions:</label>
                            <textarea class="form-control" id="e_directions" name="e_directions"></textarea>
                            <p style="color:#F00;" id="err_e_directions"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">


                <div id="myUpCategoryButtons">
                    <input type="hidden" name="qcategory_id_e" id="qcategory_id_e" value="">
                    <button type="button" class="btn btn-success" onclick="updateCategory()">Yes</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
                </div>
                <div id="waitUpCategoryButtons" style="display: none;">
                    <button class="buttonload btn btn-default" disabled="">
                        <i class="fa fa-spinner fa-spin"></i> Please wait
                    </button>
                </div>

                
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    jQuery(document).ready(function() {
        jQuery('#example').DataTable();
    });
</script>