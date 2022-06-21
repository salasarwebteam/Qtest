<div class="flz-cat-app-container" data-catid="<?php echo $id ?>" id="flz-cat-app-id-<?php echo $id ?>" data-startminheight="<?php echo ($test_height);?>" style="min-height:<?php echo ($test_height);?>px;">
   <a href="#" id="anchor-flz-cat-app-container"></a>
   <section class="flz-loader-screen js-flz-loader-screen">
      <div class="contents" data-id="startQuiz_<?php echo $id ?>">
         <h1><?php echo $category_title; ?></h1>
         <h4>Adaptive Drill</h4>
         <div class="btn-container">
            <button class="btn-default js-start-quiz-btn">Start</button>
         </div>
         <div class="js-start-app-status" data-totaltime="<?php echo $aFirst['total_time']; ?>">

         </div>
      </div>
   </section>

   <div class="d-none">
      <textarea class="json-data"><?php echo $sResData;?></textarea>
      <textarea class="js-user-db-data"><?php echo $aUserDataDb; ?></textarea>
      <input type="hidden" class="js-is-first-time" value="<?php echo $sFirstTime; ?>">
   </div>

   <div class="d-none directions-text js-directions-text">
      <h1>Directions</h1>
      <ol type="1">
         <li>Select choices and press the right arrow to continue.</li>
         <li>Press Pause/Continue to start or stop the timer.</li>
         <li>To highlight content, highlight it with your cursor and then click the "crayon" icons.</li>
         <li>Press the explanation button to view all the question explanations. Scroll through the buttons to view the different questions.</li>
         <li>You can flag questions.</li>
      </ol>
   </div>

   <div class="d-none directions-text js-instructions-text">
      <h1 class="report instructions"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" width="100%" viewBox="0 0 56 56" style="transform: scale(0.8);"><defs><path class="svg-icon" fill="#369ca8" d="M27.15 37.45q-1 0-1.7.6-.6.75-.6 1.7t.6 1.55q.7.7 1.7.7.95 0 1.55-.7.8-.6.8-1.55 0-.95-.8-1.7-.6-.6-1.55-.6m1.05-20.5q1.25.15 1.95.65 1.2.55 1.55 2.2.3 1.6-.4 2.95-1.45 1.85-3.9 3.55l-1.1 1.15q-.4.95-.4 1.75l.2 3h2.35l.35-2.85q.25-1.05.8-1.4.8-.75 1.5-1.2 1.6-1.2 2.75-2.6 1.1-1.35 1.1-3.5.3-1.75-.85-3.75-1.3-1.8-3.65-2.5-2.3-.7-4.95-.1l-1.65.55-1.65 1-1.2.95.95 1.6q.4.5 1 .25l1.35-.85 1.45-.6q1.35-.45 2.45-.25z" id="instr-q-icon"/></defs><use xlink:href="#instr-q-icon"/></svg>Instructions</span></h1>
      <p class="instr-p">This is an adaptive drill: The questions will get harder or easier depending on your performance. You can't go backwards or change prior answers.</p>
      <ol class="instruction-wrapper">
         <li><div class="instruction-block"><i class="lab la-font-awesome-flag"></i></div><span>Flag a question.</span></li>
         <li><div class="instruction-block"><i class="fa fa-pencil"></i></div><span>Mark text.</span></li>
         <li class="eliminator"><div class="round"><div class="round-wrapper"><input class="instruction-input-disabler" type="checkbox" checked="checked" disabled="disabled"><label for="checkbox1-2-d-disabled" class="disable"></label></div><span>Eliminate choice.</span></div></li>
         <li><div class="instruction-block"><i class="las la-expand-arrows-alt"></i></div><span>Fullscreen.</span></li>
         <li><div class="instruction-block"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" width="100%" viewBox="0 0 56 56"><defs><path class="svg-icon" fill="#369CA8" d="M35.75 20.25Q32.5 17 28 17q-4.55 0-7.75 3.25Q17 23.45 17 28t3.25 7.8Q23.45 39 28 39q4.5 0 7.75-3.2.6-.6 1.05-1.2l-1.4-1.4q-.45.65-1 1.2Q31.75 37 28 37q-3.7 0-6.35-2.6Q19 31.75 19 28q0-3.7 2.65-6.35Q24.3 19 28 19q3.75 0 6.4 2.65l.35.35-2.8 2.75h7L39 17.7l-2.9 2.9-.35-.35z" id="instr-refresh-icon"/></defs><use xlink:href="#instr-refresh-icon"/></svg></div><span>Delete data and redo.</span></li>
      </ol>
      <div class="btn-container btn-container-results popup-btn js-btn-result-container">
         <button class="btn-default js-reset-app-no js-close-instr-popup">Close</button>
      </div>
   </div>

   <div class="d-none results-text js-results-text">
      <h1><?php echo $category_title; ?></h1>
      <p>Complete: <span class="js-res-correct-answer">0</span> / <span class="js-res-total-question"><?php echo $aFirst['total_question']; ?></span> correct</p>
      <div class="btn-container btn-container-results popup-btn js-btn-result-container">
         <button class="btn-default js-btn-explanation-quiz-complete">View Explanations</button>
      </div>
   </div>

   <div class="d-none js-time-expired-text">
      <h1>Time Expired!</h1>
      <div class="btn-container btn-container-results popup-btn js-btn-result-container">
         <button class="btn-default js-btn-explanation">View Explanations</button>
         <button class="btn-default js-continue-question-btn">Continue Anyway</button>
      </div>
   </div>

   <div class="d-none js-no-answer-selected">
      <h1>Please select an answer first</h1>
   </div>

   <div class="d-none js-limit-navigation">
      <h1>You can’t navigation between<br> questions on this adaptive drill.<br>The test adapts to your performance.</h1>
   </div>

   <div class="d-none js-app-is-paused">
      <h1>Drill Paused</h1>
      <div class="btn-container">
         <button class="svg-btn svg-play-button js-continue-drill">
         <span><svg version="1.1" viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="transform: scale(2);"><path class="svg-icon" d="M21.88173,28.00095l6.30217-3.67922c0.24333-0.14206,0.24348-0.49362,0.00028-0.63589l-6.30217-3.68663 c-0.2455-0.14361-0.5542,0.03345-0.5542,0.31786v7.36585C21.32781,27.9672,21.63623,28.14428,21.88173,28.00095z"/></svg></span>
         </button>
      </div>
   </div>

   <div class="d-none js-reset-app">
      <h1>Are you sure you want to refresh the drill?<br>All progress will be deleted.</h1>
      <div class="btn-container btn-container-results popup-btn js-btn-result-container">
         <button class="btn-default js-reset-app-yes">Yes</button>
         <button class="btn-default js-reset-app-no">No</button>
      </div>
   </div>

   <div class="d-none js-go-to-explain-mode">
      <h1>Are you sure you want to end the <br>test and view explanations?</h1>
      <div class="btn-container btn-container-results popup-btn js-btn-result-container">
         <button class="btn-default js-explain-mode-yes">Yes</button>
         <button class="btn-default js-explain-mode-no">No</button>
      </div>
   </div>

   <div class="d-none">
      <a href="#" class="js-finish-btn"></a>
   </div>

   <div class="d-none js-report-html">
      <h1 class="report"><svg version="1.1" viewBox="0 0 256 256" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="transform: scale(0.65);" class="is-report-btn"><path class="svg-icon svg-icon-fill" d="M29.4,190.9c2.8,0,5-2.2,5-5v-52.3l30.2-16.2v42.9c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5v-59.6l-50.1,26.9v58.3   C24.4,188.6,26.6,190.9,29.4,190.9z"/><path class="svg-icon svg-icon-fill" d="M89.6,153c2.8,0,5-2.2,5-5V59.6l30.2-16.2v143.8c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5V26.7L84.6,53.6V148   C84.6,150.7,86.8,153,89.6,153z"/><path class="svg-icon svg-icon-fill" d="M149.8,185.7c2.8,0,5-2.2,5-5V85.4L185,69.2v86.3c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5v-103l-50.1,26.9v101.3   C144.8,183.5,147.1,185.7,149.8,185.7z"/><path class="svg-icon svg-icon-fill" d="M250,146.2c-0.9-1.5-2.5-2.5-4.3-2.5h-34.5c-1.8,0-3.4,1-4.3,2.5c-0.9,1.5-0.9,3.4,0,5l6.2,10.7l-27.5,16.7   c-4.2,2.6-8.3,5.1-12.5,7.7c-3,1.9-6,3.7-8.9,5.6c-7.8,5-14.7,9.5-21.1,13.9c-3.3,2.2-6.5,4.5-9.8,6.7l-44.8-43.8L7.7,220.1   c-2.3,1.5-3,4.6-1.5,6.9c1,1.5,2.6,2.3,4.2,2.3c0.9,0,1.8-0.3,2.7-0.8l74-47.1l45.2,44.1l6.1-4.4c3.4-2.4,6.8-4.8,10.3-7.1   c6.3-4.3,13.1-8.7,20.9-13.7c2.9-1.9,5.9-3.7,8.8-5.6c4.1-2.6,8.3-5.1,12.4-7.7l25.3-15.5l2-1.2l6.1,10.6c0.9,1.5,2.5,2.5,4.3,2.5   s3.4-1,4.3-2.5l17.3-29.9C250.9,149.7,250.9,147.8,250,146.2z M228.4,168.6l-8.6-14.9H237L228.4,168.6z"/></svg>Score Report</h1>
      <p class="report-p js-score-report-text pb-14"></p>
      <p class="report-p report-time-elapsed js-report-time-elapsed d-none"></p>
      <div class="flz-rtable flz-rtable--5cols flz-rtable--collapse js-report-content"></div>
   </div>

   <section class="flz-cat-app-quiz-screen js-flz-cat-app-quiz-screen d-none">
      <div class="vc_col-sm-12">
         <div class="wpb_wrapper">
            <div class="header-content">
               <div class="vc_col-sm-6 question-title-col">
                  <div class="controls-container align-left">
                     <div class="btn-container instruction-one">
                        <button class="js-show-question-popup-btn svg-btn" data-intro="Click this button to show the description of the app." data-position="bottom">
                           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" width="100%" viewBox="0 0 56 56" style="transform: scale(0.8);"><defs><path class="svg-icon" fill="#369ca8" d="M27.15 37.45q-1 0-1.7.6-.6.75-.6 1.7t.6 1.55q.7.7 1.7.7.95 0 1.55-.7.8-.6.8-1.55 0-.95-.8-1.7-.6-.6-1.55-.6m1.05-20.5q1.25.15 1.95.65 1.2.55 1.55 2.2.3 1.6-.4 2.95-1.45 1.85-3.9 3.55l-1.1 1.15q-.4.95-.4 1.75l.2 3h2.35l.35-2.85q.25-1.05.8-1.4.8-.75 1.5-1.2 1.6-1.2 2.75-2.6 1.1-1.35 1.1-3.5.3-1.75-.85-3.75-1.3-1.8-3.65-2.5-2.3-.7-4.95-.1l-1.65.55-1.65 1-1.2.95.95 1.6q.4.5 1 .25l1.35-.85 1.45-.6q1.35-.45 2.45-.25z" id="flz-q-icon"/></defs><use xlink:href="#flz-q-icon"/></svg>
                        </button>
                     </div>
                     <div class="btn-container">
                        <button class="btn-circle js-add-flag-btn" data-intro="Click this button to flag a question." data-position="right"><i class="lab la-font-awesome-flag"></i></button>
                     </div>
                     <span class="text-default pl-2"><span class="js-question-text">Question</span> <span class="js-question-nr"></span> <span class="js-question-of"></span> <?php echo $aFirst['total_question']; ?></span>
                  </div>
               </div>
               <div class="vc_col-sm-6 timer-container-col">
                  <div class="controls-container align-right">
                     <div class="crayons-col">
                        <button data-color="#d4da3a"><i class="fa fa-pencil green"></i></button>
                        <button data-color="#ed2542"><i class="fa fa-pencil red"></i></button>
                        <button data-color="#513292"><i class="fa fa-pencil purple"></i></button>
                     </div>
                     <div class="btn-container">
                        <span class="timer-countdown-wrapper text-default">
                           <i class="js-countdown timer-countdown" data-starttoff="00:20" data-startt="<?php echo $aFirst['total_time']; ?>:00">00:00</i> / <i class="js-total-time">00:00</i>
                        </span>
                     </div>
                     <div class="btn-container">
                        <span class="js-timer-pause-btn d-none"><i class="las la-pause"></i></span>
                        <span class="js-timer-play-btn d-none"><svg version="1.1" viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="transform: scale(2);"><path class="svg-icon" d="M21.88173,28.00095l6.30217-3.67922c0.24333-0.14206,0.24348-0.49362,0.00028-0.63589l-6.30217-3.68663 c-0.2455-0.14361-0.5542,0.03345-0.5542,0.31786v7.36585C21.32781,27.9672,21.63623,28.14428,21.88173,28.00095z"/></svg></span>
                        <button class="svg-btn svg-play-button js-control-timer-btn"></button>
                        <span class="js-report-btn d-none"><svg version="1.1" viewBox="0 0 256 256" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="transform: scale(0.65);" class="is-report-btn"><path class="svg-icon svg-icon-fill" d="M29.4,190.9c2.8,0,5-2.2,5-5v-52.3l30.2-16.2v42.9c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5v-59.6l-50.1,26.9v58.3   C24.4,188.6,26.6,190.9,29.4,190.9z"/><path class="svg-icon svg-icon-fill" d="M89.6,153c2.8,0,5-2.2,5-5V59.6l30.2-16.2v143.8c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5V26.7L84.6,53.6V148   C84.6,150.7,86.8,153,89.6,153z"/><path class="svg-icon svg-icon-fill" d="M149.8,185.7c2.8,0,5-2.2,5-5V85.4L185,69.2v86.3c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5v-103l-50.1,26.9v101.3   C144.8,183.5,147.1,185.7,149.8,185.7z"/><path class="svg-icon svg-icon-fill" d="M250,146.2c-0.9-1.5-2.5-2.5-4.3-2.5h-34.5c-1.8,0-3.4,1-4.3,2.5c-0.9,1.5-0.9,3.4,0,5l6.2,10.7l-27.5,16.7   c-4.2,2.6-8.3,5.1-12.5,7.7c-3,1.9-6,3.7-8.9,5.6c-7.8,5-14.7,9.5-21.1,13.9c-3.3,2.2-6.5,4.5-9.8,6.7l-44.8-43.8L7.7,220.1   c-2.3,1.5-3,4.6-1.5,6.9c1,1.5,2.6,2.3,4.2,2.3c0.9,0,1.8-0.3,2.7-0.8l74-47.1l45.2,44.1l6.1-4.4c3.4-2.4,6.8-4.8,10.3-7.1   c6.3-4.3,13.1-8.7,20.9-13.7c2.9-1.9,5.9-3.7,8.8-5.6c4.1-2.6,8.3-5.1,12.4-7.7l25.3-15.5l2-1.2l6.1,10.6c0.9,1.5,2.5,2.5,4.3,2.5   s3.4-1,4.3-2.5l17.3-29.9C250.9,149.7,250.9,147.8,250,146.2z M228.4,168.6l-8.6-14.9H237L228.4,168.6z"/></svg></span>
                     </div>
                     <div class="btn-container">
                        <button class="btn-circle js-go-fullscreen"><i class="las la-expand-arrows-alt"></i></button>
                     </div>
                  </div>
               </div>
               <div class="clear-div"></div>
            </div>

            <div class="quiz-content js-quiz-content-wrapper" data-minheightexpl="<?php echo (intval($expl_mode_height) - 80);?>" data-minheight="<?php echo (intval($test_mode_height) - 80);?>" style="min-height:<?php echo (intval($test_mode_height) - 80);?>px;">
               <div class="vc_col-sm-12">
                  <div class="vc_col-sm-6 js-quiz-content-title"></div>
                  <div class="vc_col-sm-6">
                     <div class="js-quiz-content"></div>
                     <div class="vc_col-sm-12 quiz-select-btn-wrapper js-quiz-select-btn-wrapper">
                        <div class="quiz-select-btn">
                           <div class="btn-container">
                              <button class="btn-default js-btn-select">Select</button>
                           </div>
                        </div>
                     </div>
                     <div class="vc_col-sm-12 quiz-select-btn-wrapper explain-nav-btn d-none js-explain-nav-btn">
                        <div class="quiz-select-btn">
                           <div class="btn-container prev-btn">
                              <button class="btn-default btn-circle js-prev-btn"><i class="las la-angle-left"></i></button>
                           </div>
                           <div class="btn-container next-btn">
                              <button class="btn-default btn-circle js-next-btn"><i class="las la-angle-right"></i></button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="clear-div"></div>
            </div>

            <div class="footer">
               <div class="footer-wrapper">
                  <div class="vc_col-sm-6">
                     <div class="nav-container light-theme simple-pagination js-simple-pagination"></div>
                  </div>
                  <div class="vc_col-sm-6">
                     <div class="controls">
                        <div class="btn-container">
                           <button class="btn-default js-btn-explanation-popup btn-explanation">Explanations</button>
                        </div>
                        <div class="btn-container pl-10 btn-reset-button">
                           <button class="svg-btn js-reset-btn"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" width="100%" viewBox="0 0 56 56"><defs><path class="svg-icon" fill="#369CA8" d="M35.75 20.25Q32.5 17 28 17q-4.55 0-7.75 3.25Q17 23.45 17 28t3.25 7.8Q23.45 39 28 39q4.5 0 7.75-3.2.6-.6 1.05-1.2l-1.4-1.4q-.45.65-1 1.2Q31.75 37 28 37q-3.7 0-6.35-2.6Q19 31.75 19 28q0-3.7 2.65-6.35Q24.3 19 28 19q3.75 0 6.4 2.65l.35.35-2.8 2.75h7L39 17.7l-2.9 2.9-.35-.35z" id="flz-refresh-icon"/></defs><use xlink:href="#flz-refresh-icon"/></svg></button>
                        </div>
                     </div>
                  </div>
                  <div class="vc_col-sm-6 d-none">
                     <div class="text">Adj 30</div>
                  </div>
                  <div class="clear-div"> </div>
               </div>
            </div>

         </div>
      </div>
   </section>

   <div class="popup-overlay d-none">
      <div class="wrapper">
         <div class="js-text-content">
            <h1>Notification</h1>
            <p>You need to select an answer first.</p>
         </div>
         <?php
         /*
         <div class="btn-container btn-close">
            <button class="btn-circle js-close-overlay-btn"><i class="las la-times"></i></button>
         </div>
         */
         ?>
      </div>
      <div class="btn-container close-btn">
         <button class="btn-default btn-circle js-close-overlay-btn"><i class="las la-times"></i></button>
      </div>
   </div>

   <div class="mobile-popup-overlay d-none js-debug-overlay">
      <div class="wrapper">
         <div class="js-mobile-text-content">
         </div>
      </div>
      <div class="btn-container close-btn">
         <button class="btn-default btn-circle js-mobile-close-overlay-btn"><i class="las la-times"></i></button>
      </div>
   </div>
</div>