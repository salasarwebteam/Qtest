jQuery( document ).ready(function() {
	jQuery('.flasMsg').fadeOut(5000);
//Enalbel Pasege Info
jQuery("#is_unseen_1").change(function() {
    if(this.checked) {
        jQuery("#unseen_passage_1").removeAttr('disabled');
        jQuery('#unseen_passage_1').show();
    }else{
    	jQuery('#unseen_passage_1').prop('disabled', true);
    	jQuery('#unseen_passage_1').hide();
    }
});	

jQuery("#is_unseen_2").change(function() {
    if(this.checked) {
        jQuery("#unseen_passage_2").removeAttr('disabled');
    }else{
    	jQuery('#unseen_passage_2').prop('disabled', true);
    }
});	

jQuery("#is_unseen_3").change(function() {
    if(this.checked) {
        jQuery("#unseen_passage_3").removeAttr('disabled');
    }else{
    	jQuery('#unseen_passage_3').prop('disabled', true);
    }
});	

jQuery("#is_unseen_4").change(function() {
    if(this.checked) {
        jQuery("#unseen_passage_4").removeAttr('disabled');
    }else{
    	jQuery('#unseen_passage_4').prop('disabled', true);
    }
});	

jQuery("#is_unseen_5").change(function() {
    if(this.checked) {
        jQuery("#unseen_passage_5").removeAttr('disabled');
    }else{
    	jQuery('#unseen_passage_5').prop('disabled', true);
    }
});	
 
//Delete Process  
jQuery("#deleteQuestionYes").click(function(){
		jQuery('#myDeleModal').modal('hide');
		var urls = jQuery('#urls').val();
	    var question_no = jQuery('#question_no').val(); 
	    var hard_level = jQuery('#hard_level').val();  
	    var qcategory_id = jQuery('#qcategory_id').val(); 
	    jQuery.ajax({
        url: urls,
        type: 'POST',
        data: {
	        action    : 'deleteQuestion', 
    	    question_no  : question_no 
        },
        dataType: 'html',
        success: function(response) { 
        if(response='suces'){
        	 //jQuery("#quiz_id_"+qtest_id).remove();
        	 location.href = "?page=cat-question-list&id="+qcategory_id+"&level="+hard_level+"&msg=suc";
          } 
        }
	}); 
  }); 
});
//Add Question

function backPreviousLevel(level){
	if(level == '1'){ 
		jQuery(".mycontainer").hide();
		jQuery("#container_1").show();
	}else if(level == '2'){
		jQuery(".mycontainer").hide();
		jQuery("#container_2").show();
	}
}


function addQuestion(srt){
    var urls = jQuery('#urls').val();  
	var submircheak = 0 ;
	if (jQuery("#is_unseen_"+srt).is(":checked")) {
		var is_unseen  = '1';
	    var unseen_passage = jQuery('#unseen_passage_'+srt).val();    
	       if (unseen_passage==null || unseen_passage==""){		     
		        submircheak =1; 
				setvalidation('unseen_passage_'+srt,'F',"Please Insert Unseen Passage");
	         }else{			  
				 setvalidation('unseen_passage_'+srt,'S',''); 
   		   }	
	}else{
		var is_unseen  = '0';
	 	var unseen_passage = '';	 
	}

	var quiz_tile = jQuery('#quiz_tile_'+srt).val();    
	if( document.getElementById("quiz_image_"+srt).files.length == 0 ){
       if (quiz_tile==null || quiz_tile==""){		     
	        submircheak =1; 
			setvalidation('quiz_tile_'+srt,'F',"Please Insert Title");
         }else{			  
			 setvalidation('quiz_tile_'+srt,'S',''); 
			 }
	}else{
		 setvalidation('quiz_tile_'+srt,'S',''); 
	}

	var a_option = jQuery('#a_option_'+srt).val();    
	   if (a_option==null || a_option==""){		     
	        submircheak =1; 
			setvalidation('a_option_'+srt,'F',"Please Insert a Option");
	     }else{			  
			 setvalidation('a_option_'+srt,'S',''); 
	    }

    var a_explain = jQuery('#a_explain_'+srt).val();    
        if (a_explain==null || a_explain==""){		     
	         submircheak =1; 
			 setvalidation('a_explain_'+srt,'F',"Please Insert a explain");
          }else{			  
			  setvalidation('a_explain_'+srt,'S',''); 
     }		 

    var b_option = jQuery('#b_option_'+srt).val();    
       if (b_option==null || b_option==""){		     
	        submircheak =1; 
			setvalidation('b_option_'+srt,'F',"Please Insert b Option");
         }else{			  
			 setvalidation('b_option_'+srt,'S',''); 
  	}	

	var b_explain = jQuery('#b_explain_'+srt).val();    
        if (b_explain==null || b_explain==""){		     
	         submircheak =1; 
			 setvalidation('b_explain_'+srt,'F',"Please Insert b explain");
          }else{			  
			  setvalidation('b_explain_'+srt,'S',''); 
    }
  
    var c_option = jQuery('#c_option_'+srt).val();    
        if (c_option==null || c_option==""){		     
	         submircheak =1; 
			 setvalidation('c_option_'+srt,'F',"Please Insert c Option");
          }else{			  
			  setvalidation('c_option_'+srt,'S',''); 
     }	

	var c_explain = jQuery('#c_explain_'+srt).val();    
        if (c_explain==null || c_explain==""){		     
	         submircheak =1; 
			 setvalidation('c_explain_'+srt,'F',"Please Insert c explain");
          }else{			  
			  setvalidation('c_explain_'+srt,'S',''); 
     }

    var d_option = jQuery('#d_option_'+srt).val();    
        if (d_option==null || d_option==""){		     
	         submircheak =1; 
			 setvalidation('d_option_'+srt,'F',"Please Insert d Option");
          }else{			  
	  		setvalidation('d_option_'+srt,'S',''); 
   		}	

	var d_explain = jQuery('#d_explain_'+srt).val();    
        if (d_explain==null || d_explain==""){		     
	         submircheak =1; 
			 setvalidation('d_explain_'+srt,'F',"Please Insert d explain");
          }else{			  
	  	setvalidation('d_explain_'+srt,'S',''); 
    }

    var e_option = jQuery('#e_option_'+srt).val();  
	var e_explain = jQuery('#e_explain_'+srt).val();  

	var right_answer = jQuery('#right_answer_'+srt).val();    
       if (right_answer==null || right_answer==""){		     
	        submircheak =1; 
			setvalidation('right_answer_'+srt,'F',"Please select Right Answer");
         }else{			  
			 setvalidation('right_answer_'+srt,'S',''); 
	}

	var answer_hint = jQuery('#answer_hint_'+srt).val(); 
	var answer_explain = jQuery('#answer_explain_'+srt).val();    
   //     if (answer_explain==null || answer_explain==""){		     
	  //       submircheak =1;  
			// setvalidation('answer_explain_'+srt,'F',"Please Insert Choice Explanations");
   //       }else{			  
			//  setvalidation('answer_explain_'+srt,'S',''); 
   //  }
	var questions_explain = jQuery('#questions_explain_'+srt).val(); 
	var hard_level        = jQuery('#hard_level_'+srt).val(); 
    var qcategory_id      = jQuery('#qcategory_id').val();
    if(submircheak ==1){  
			   return false;
		}else{
			if(srt == '1'){ 
				jQuery(".mycontainer").hide();
				jQuery("#container_2").show();
			}else if(srt == '2'){
				jQuery(".mycontainer").hide();
				jQuery("#container_3").show();
			}else if(srt == '3'){
				var formData = new FormData();
				formData.append('action', 'saveCTATest');
				formData.append('qcategory_id', qcategory_id);
				for (var i = 1; i <= 3; i++) {
						 formData.append('quiz_image_'+i, jQuery('#quiz_image_'+i)[0].files[0]);
						 if (jQuery("#is_unseen_"+i).is(":checked")) {
					 	 	formData.append('is_unseen_'+i, '1');
					 	 }else{
					 	 	formData.append('is_unseen_'+i, '0');
					 	 }
					     formData.append('unseen_passage_'+i, jQuery('#unseen_passage_'+i).val());		  			 		 		 	 		 
						 formData.append('quiz_tile_'+i, jQuery('#quiz_tile_'+i).val());
						 formData.append('a_option_'+i, jQuery('#a_option_'+i).val());
						 formData.append('a_explain_'+i, jQuery('#a_explain_'+i).val()); 
						 formData.append('b_option_'+i, jQuery('#b_option_'+i).val());
						 formData.append('b_explain_'+i, jQuery('#b_explain_'+i).val());
						 formData.append('c_option_'+i, jQuery('#c_option_'+i).val());
						 formData.append('c_explain_'+i, jQuery('#c_explain_'+i).val());
						 formData.append('d_option_'+i, jQuery('#d_option_'+i).val());
						 formData.append('d_explain_'+i, jQuery('#d_explain_'+i).val());
						 formData.append('e_option_'+i, jQuery('#e_option_'+i).val());
						 formData.append('e_explain_'+i, jQuery('#e_explain_'+i).val());
						 formData.append('right_answer_'+i, jQuery('#right_answer_'+i).val());
						 formData.append('answer_hint_'+i, jQuery('#answer_hint_'+i).val());
						 formData.append('questions_explain_'+i, jQuery('#questions_explain_'+i).val());
						 formData.append('answer_explain_'+i, jQuery('#answer_explain_'+i).val());
						 formData.append('answer_explain_'+i, jQuery('#answer_explain_'+i).val());
						 formData.append('hard_level_'+i, jQuery('#hard_level_'+i).val());
				}
				jQuery.ajax({     
					        url: urls,
					        type: 'POST',
					        data: formData,
					        processData: false,
		   				    contentType: false,
					        dataType: 'html',
					        success: function(response) { 
					        if(response='suces'){
					        	location.href = "?page=cat-question-list&id="+qcategory_id+"&level="+hard_level+"&msg=suc";
					          } 
					        }
					});
			}  
	}
}



//Edit Quiz
function editQuestion(){ 
	var quiz_id = jQuery('#quiz_id').val();
	var urls = jQuery('#urls').val();  
	 var submircheak = 0 ;
	 if (jQuery("#is_unseen").is(":checked")) {
		var is_unseen  = '1';
	    var unseen_passage = jQuery('#unseen_passage').val();    
	       if (unseen_passage==null || unseen_passage==""){		     
		        submircheak =1; 
				setvalidation('unseen_passage','F',"Please Insert Unseen Passage");
	         }else{			  
				 setvalidation('unseen_passage','S',''); 
   		   }	
	}else{
		var is_unseen  = '0';
	 	var unseen_passage = '';	 
	}
 
	var quiz_type = jQuery('#quiz_type').val();
	if(quiz_type == '0'){
		 var quiz_tile = jQuery('#quiz_tile').val();    
	       if (quiz_tile==null || quiz_tile==""){		     
		        submircheak =1; 
				setvalidation('quiz_tile','F',"Please Insert Title");
	         }else{			  
				 setvalidation('quiz_tile','S',''); 
    		}
	}else{
	  	var quiz_tile = '';
    }	

	var a_option = jQuery('#a_option').val();    
       if (a_option==null || a_option==""){		     
	        submircheak =1; 
			setvalidation('a_option','F',"Please Insert a Option");
         }else{			  
			 setvalidation('a_option','S',''); 
    }

    var a_explain = jQuery('#a_explain').val();    
       if (a_explain==null || a_explain==""){		     
	        submircheak =1; 
			setvalidation('a_explain','F',"Please Insert a explain");
         }else{			  
			 setvalidation('a_explain','S',''); 
    }

	var b_option = jQuery('#b_option').val();    
    if (b_option==null || b_option==""){		     
	        submircheak =1; 
			setvalidation('b_option','F',"Please Insert b Option");
         }else{			  
			 setvalidation('b_option','S',''); 
	 }	

	var b_explain = jQuery('#b_explain').val();    
     if (b_explain==null || b_explain==""){		     
	        submircheak =1; 
			setvalidation('b_explain','F',"Please Insert b explain");
         }else{			  
			 setvalidation('b_explain','S',''); 
    } 

	var c_option = jQuery('#c_option').val();    
    if (c_option==null || c_option==""){		     
	        submircheak =1; 
			setvalidation('c_option','F',"Please Insert c Option");
         }else{			  
			 setvalidation('c_option','S',''); 
	}	

    var c_explain = jQuery('#c_explain').val();    
    if (c_explain==null || c_explain==""){		     
	        submircheak =1; 
			setvalidation('c_explain','F',"Please Insert c explain");
         }else{			  
			 setvalidation('c_explain','S',''); 
    }

	var d_option = jQuery('#d_option').val();    
    if (d_option==null || d_option==""){		     
	        submircheak =1; 
			setvalidation('d_option','F',"Please Insert d Option");
         }else{			  
			 setvalidation('d_option','S',''); 
    }	

    var d_explain = jQuery('#d_explain').val();    
    if (d_explain==null || d_explain==""){		     
	        submircheak =1; 
			setvalidation('d_explain','F',"Please Insert d explain");
         }else{			  
			 setvalidation('d_explain','S',''); 
    }

	var e_option = jQuery('#e_option').val();    
    var e_explain = jQuery('#e_explain').val();  
	var right_answer = jQuery('#right_answer').val();    
    if (right_answer==null || right_answer==""){		     
	        submircheak =1; 
			setvalidation('right_answer','F',"Please Insert d Option");
         }else{			  
			 setvalidation('right_answer','S',''); 
    }
	var answer_hint = jQuery('#answer_hint').val();    
    // if (answer_hint==null || answer_hint==""){		     
   //       submircheak =1; 
  //        setvalidation('answer_hint','F',"Please Insert Answer Hint");
 //       }else{			  
//          setvalidation('answer_hint','S',''); 
//     }
  var questions_explain = jQuery('#questions_explain').val();    
   //  if (questions_explain==null || questions_explain==""){		     
  //        submircheak =1; 
 //         setvalidation('questions_explain','F',"Please Insert Question Analysis");
//     }else{			  
//          setvalidation('questions_explain','S',''); 
//     }   
 var answer_explain = jQuery('#answer_explain').val();    
  // if (answer_explain==null || answer_explain==""){		     
  //           submircheak =1; 
 	// 		setvalidation('answer_explain','F',"Please Insert Choice Explanations");
  //        }else{			  
		// 	 setvalidation('answer_explain','S',''); 
  //  }  
  var hard_level = jQuery('#hard_level').val();  		
  var old_image = jQuery('#old_image').val();
  var qcategory_id = jQuery('#qcategory_id').val();  	
  var formData = new FormData();
	 formData.append('is_unseen', is_unseen);
	 formData.append('unseen_passage', unseen_passage);
	 formData.append('quiz_id', quiz_id);
	 formData.append('quiz_type', quiz_type);
	 formData.append('old_image', old_image);
	 if(quiz_type == '1'){
 	 	formData.append('quiz_image', jQuery('#quiz_image')[0].files[0]);	
 	 }  
 	 formData.append('quiz_tile', quiz_tile);	  			 		 		 	 		 
	 formData.append('a_option', a_option);
	 formData.append('a_explain', a_explain);
	 formData.append('b_option', b_option);
	 formData.append('b_explain', b_explain);
	 formData.append('c_option', c_option);
	 formData.append('c_explain', c_explain);
	 formData.append('d_option', d_option);
	 formData.append('d_explain', d_explain);
	 formData.append('e_option', e_option);
	 formData.append('e_explain', e_explain);
	 formData.append('right_answer', right_answer);
	 formData.append('answer_hint', answer_hint);
	 formData.append('answer_explain', answer_explain);
	 formData.append('questions_explain', questions_explain);
	 formData.append('hard_level', hard_level); 
	 formData.append('action', 'updateQuestion');			  		 			 		 		 	 		 
 	 if(submircheak ==1){  
			   return false;
			}else{
				jQuery.ajax({
			        url: urls,
			        type: 'POST',
			        data: formData,
			        processData: false,
   				    contentType: false,
			        dataType: 'html',
			        success: function(response) { 
			        if(response='suces'){ 
			        	 location.href = "?page=cat-question-list&id="+qcategory_id+"&level="+hard_level;
			          } 
			        }
			      }); 
			}
	}	
function setvalidation(strId,strT,strMsg){
	   if(strT=='S'){
		       jQuery('#'+strId).css('border','');
			   jQuery('#err_'+strId).html('');
		   }else if(strT=='F'){			      
		       jQuery('#'+strId).css('border','1px solid #F00');
			   jQuery('#err_'+strId).html(strMsg);
		  }
} 
//Delete Question
function deleteConformations(srt,srt2){
	jQuery('#question_no').val(srt);  
	jQuery('#hard_level').val(srt2);  
	jQuery('#myDeleModal').modal('show');
}
//View Quiz Info
function viewQuestionInfo(srt){
	    var urls = jQuery('#urls').val();
	    jQuery.ajax({
        url: urls,
        type: 'POST',
        data: {
	        action    : 'viewQuestionInfo',
	        qtest_id  : srt 
        },
        dataType: 'html',
        success: function(response) {
        	var responses = JSON.stringify(response);
        	var  obj = jQuery.parseJSON(response);
        	if(obj.is_unseen == '1'){
        	  jQuery('#unseen_passage').html(obj.unseen_passage);	
        	  jQuery("#quiz_info").removeClass("col-sm-12").addClass("col-sm-6");
        	  jQuery("#is_unseen").show();
        	  jQuery('#questions_explain_1').html(obj.questions_explain);	
        	  jQuery("#myqExplain_1").show();
        	  jQuery("#myqExplain_2").hide();
        	}else{
        	  jQuery("#myqExplain_1").hide();
        	  jQuery("#is_unseen").hide();
        	  jQuery("#quiz_info").removeClass("col-sm-6").addClass("col-sm-12");
        	  jQuery('#questions_explain_2').html(obj.questions_explain);	
        	  jQuery("#myqExplain_2").show();
        	}
        	jQuery('#quiz_title').html("Q."+obj.quiz_title); 
        	jQuery('#a_option').html("1."+obj.a_options); 
        	jQuery('#b_option').html("2."+obj.b_options); 
        	jQuery('#c_option').html("3."+obj.c_options);
        	jQuery('#d_option').html("4."+obj.d_options);
        	jQuery('#e_option').html("5."+obj.e_options);
        	jQuery('#right_answer').html(obj.right_answers);  
        	jQuery('#answer_hint').html(obj.answer_hints);
        	jQuery('#answer_explain').html(obj.answer_explain);  
        	jQuery('#hard_level').html(obj.hard_level);  
        	jQuery('#myViewQuizInfo').modal('show');	
        }
   }); 
}

//Add Category
function addCTACategory(){
	jQuery('#addCTACategory').modal('show');
}
function saveCTACategory(){ 
  var urls = jQuery('#ajax_urls').val();  
  var submircheak = 0 ;
	var category_title = jQuery('#category_title').val();    
    if (category_title==null || category_title==""){		     
	        submircheak =1; 
			setvalidation('category_title','F',"Please insert a category title");
         }else{			  
			 setvalidation('category_title','S',''); 
  	 }

  	var test_height = jQuery('#test_height').val();    
    if (test_height==null || test_height==""){		     
	        submircheak =1; 
			setvalidation('test_height','F',"Please insert a height");
         }else{			  
			 setvalidation('test_height','S',''); 
  	 }
 
  	var test_mode_height = jQuery('#test_mode_height').val();    
    if (test_mode_height==null || test_mode_height==""){		     
	        submircheak =1; 
			setvalidation('test_mode_height','F',"Please insert Test Mode Height");
         }else{			  
			 setvalidation('test_mode_height','S',''); 
  	 } 


  	var explanation_mode_height = jQuery('#explanation_mode_height').val();    
    if (explanation_mode_height==null || explanation_mode_height==""){		     
	        submircheak =1; 
			setvalidation('explanation_mode_height','F',"Please insert Explanation Mode Height");
         }else{			  
			 setvalidation('explanation_mode_height','S',''); 
  	 }  

  	var quiz_directions = jQuery('#quiz_directions').val();    
    if (quiz_directions==null || quiz_directions==""){		     
	        submircheak =1; 
			setvalidation('quiz_directions','F',"Please insert directions");
         }else{			  
			 setvalidation('quiz_directions','S',''); 
  	 }

  	if(submircheak ==1){  
			   return false;
		}else{ 
		   jQuery("#myCategoryButtons").hide();
		   jQuery("#waitCategoryButtons").show();	
		   jQuery.ajax({
            url: urls,
            type: 'POST',
            data: {
            action                  : 'saveCTSCategory',
            category_title          : category_title ,
            test_height             : test_height ,
            test_mode_height        : test_mode_height , 
            explanation_mode_height : explanation_mode_height , 
            quiz_directions         : quiz_directions 
            },
            dataType: 'html',
            success: function(response) {
              	if(response='suces'){ 
             		//location.href = "?page=catapp-quiz-list&msg=suc";
	          	} 
            }
        }); 
	}
}

//Delete Ctest
function deleteCTATestAlert(srt){
	jQuery('#qcategory_id').val(srt);
	jQuery('#myDeleCtestModal').modal('show');
}
function deleteCTATest(){
	   jQuery('#myDeleCtestModal').modal('hide');
		var urls = jQuery('#urls').val();
	    var qcategory_id = jQuery('#qcategory_id').val(); 
	    jQuery.ajax({
        url: urls,
        type: 'POST',
        data: {
        action   : 'deleteCTACategory', 
        qcategory_id : qcategory_id  
        },
        dataType: 'html',
        success: function(response) { 
        if(response='suces'){
        	 jQuery("#qcategory_id_"+qcategory_id).remove();
             location.href = "?page=catapp-quiz-list";  
          } 
        }
      });
}


function updateCatQuiz(){
  //alert(2);
  var urls = jQuery('#ajax_urls').val();  
  var submircheak = 0 ;
	var e_category_title = jQuery('#category_title').val();    
    if (e_category_title==null || e_category_title==""){		     
	        submircheak =1; 
			setvalidation('category_title','F',"Please insert a category title");
         }else{			  
			 setvalidation('category_title','S',''); 
  	 }

  	var e_test_height = jQuery('#test_height').val();    
    if (e_test_height==null || e_test_height==""){		     
	        submircheak =1; 
			setvalidation('test_height','F',"Please insert a height");
         }else{			  
			 setvalidation('test_height','S',''); 
  	 }

  	var e_questions_test_height = jQuery('#test_mode_height').val();    
    if (e_questions_test_height==null || e_questions_test_height==""){		     
	        submircheak =1; 
			setvalidation('test_mode_height','F',"Please insert Test Mode Height");
         }else{			  
			 setvalidation('test_mode_height','S',''); 
  	 }

  	var e_questions_explanation_height = jQuery('#explanation_mode_height').val();    
    if (e_questions_explanation_height==null || e_questions_explanation_height==""){		     
	        submircheak =1; 
			setvalidation('explanation_mode_height','F',"Please insert Explanation Mode Height");
         }else{			  
			 setvalidation('explanation_mode_height','S',''); 
  	 } 

  	var e_directions = jQuery('#quiz_directions').val();    
    if (e_directions==null || e_directions==""){		     
	        submircheak =1; 
			setvalidation('quiz_directions','F',"Please insert a directions");
         }else{			  
			 setvalidation('quiz_directions','S',''); 
  	 }
  	  
  	var qcategory_id_e = jQuery('#qcategory_id').val();  
  	if(submircheak ==1){  
			   return false;
		}else{ 
		   jQuery("#myUpCategoryButtons").hide();
		   jQuery("#waitUpCategoryButtons").show();	
		   jQuery.ajax({
            url: urls,
            type: 'POST',
            data: {
            action                       : 'updateCTACategory', 
            category_title               : e_category_title,
            qcategory_id                 : qcategory_id_e,
            test_height                  : e_test_height, 
            questions_test_height        : e_questions_test_height,
            questions_explanation_height : e_questions_explanation_height, 
            e_directions                 : e_directions  
            },
            dataType: 'html',
            success: function(response) {
            if(response='suces'){ 
           		  location.href = "?page=catapp-quiz-list";
	          } 
            }
        }); 
	}
}
 
function trackCorrectIncorrect(){
	jQuery('#myModalSearch').modal('show');
}