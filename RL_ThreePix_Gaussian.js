/******************************** 
 *RL_ThreePix_Gaussian*
 ********************************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'RL_ThreePix_Gaussian';  // from the Builder filename that created this script
let expInfo = { 'Enter your ProlificID': '' };

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
const prac_trials_makeups_noprobeLoopScheduler = new Scheduler(psychoJS);
const practice_qsLoopScheduler = new Scheduler(psychoJS);
const blocksLoopScheduler = new Scheduler(psychoJS);

psychoJS.scheduleCondition(function () { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introslide1RoutineBegin());
flowScheduler.add(introslide1RoutineEachFrame());
flowScheduler.add(introslide1RoutineEnd());
flowScheduler.add(introslide2RoutineBegin());
flowScheduler.add(introslide2RoutineEachFrame());
flowScheduler.add(introslide2RoutineEnd());
flowScheduler.add(introslide3RoutineBegin());
flowScheduler.add(introslide3RoutineEachFrame());
flowScheduler.add(introslide3RoutineEnd());
flowScheduler.add(introslide4RoutineBegin());
flowScheduler.add(introslide4RoutineEachFrame());
flowScheduler.add(introslide4RoutineEnd());
flowScheduler.add(introslide5RoutineBegin());
flowScheduler.add(introslide5RoutineEachFrame());
flowScheduler.add(introslide5RoutineEnd());
flowScheduler.add(age_genderRoutineBegin());
flowScheduler.add(age_genderRoutineEachFrame());
flowScheduler.add(age_genderRoutineEnd());
flowScheduler.add(Instructions1RoutineBegin());
flowScheduler.add(Instructions1RoutineEachFrame());
flowScheduler.add(Instructions1RoutineEnd());
flowScheduler.add(Instructions0ContextRoutineBegin());
flowScheduler.add(Instructions0ContextRoutineEachFrame());
flowScheduler.add(Instructions0ContextRoutineEnd());
flowScheduler.add(Instructions1ContextRoutineBegin());
flowScheduler.add(Instructions1ContextRoutineEachFrame());
flowScheduler.add(Instructions1ContextRoutineEnd());
flowScheduler.add(Instructions2ContextRoutineBegin());
flowScheduler.add(Instructions2ContextRoutineEachFrame());
flowScheduler.add(Instructions2ContextRoutineEnd());
flowScheduler.add(Instructions2RoutineBegin());
flowScheduler.add(Instructions2RoutineEachFrame());
flowScheduler.add(Instructions2RoutineEnd());
flowScheduler.add(Instructions3RoutineBegin());
flowScheduler.add(Instructions3RoutineEachFrame());
flowScheduler.add(Instructions3RoutineEnd());
flowScheduler.add(Instructions4RoutineBegin());
flowScheduler.add(Instructions4RoutineEachFrame());
flowScheduler.add(Instructions4RoutineEnd());
flowScheduler.add(Instructions5RoutineBegin());
flowScheduler.add(Instructions5RoutineEachFrame());
flowScheduler.add(Instructions5RoutineEnd());
flowScheduler.add(Instructions6RoutineBegin());
flowScheduler.add(Instructions6RoutineEachFrame());
flowScheduler.add(Instructions6RoutineEnd());
flowScheduler.add(Instructions7RoutineBegin());
flowScheduler.add(Instructions7RoutineEachFrame());
flowScheduler.add(Instructions7RoutineEnd());
flowScheduler.add(Instructions8RoutineBegin());
flowScheduler.add(Instructions8RoutineEachFrame());
flowScheduler.add(Instructions8RoutineEnd());
flowScheduler.add(prac_trials_makeups_noprobeLoopBegin(prac_trials_makeups_noprobeLoopScheduler));
flowScheduler.add(prac_trials_makeups_noprobeLoopScheduler);
flowScheduler.add(prac_trials_makeups_noprobeLoopEnd);
flowScheduler.add(pre_dec_qsRoutineBegin());
flowScheduler.add(pre_dec_qsRoutineEachFrame());
flowScheduler.add(pre_dec_qsRoutineEnd());
flowScheduler.add(practice_qsLoopBegin(practice_qsLoopScheduler));
flowScheduler.add(practice_qsLoopScheduler);
flowScheduler.add(practice_qsLoopEnd);
flowScheduler.add(Instructions10RoutineBegin());
flowScheduler.add(Instructions10RoutineEachFrame());
flowScheduler.add(Instructions10RoutineEnd());
flowScheduler.add(pre_experiment_itiRoutineBegin());
flowScheduler.add(pre_experiment_itiRoutineEachFrame());
flowScheduler.add(pre_experiment_itiRoutineEnd());
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(main_exp_endRoutineBegin());
flowScheduler.add(main_exp_endRoutineEachFrame());
flowScheduler.add(main_exp_endRoutineEnd());
flowScheduler.add(payment_screenRoutineBegin());
flowScheduler.add(payment_screenRoutineEachFrame());
flowScheduler.add(payment_screenRoutineEnd());
flowScheduler.add(save_variablesRoutineBegin());
flowScheduler.add(save_variablesRoutineEachFrame());
flowScheduler.add(save_variablesRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    { 'name': 'practice_once_F', 'path': 'my_stimuli/Stim_6.jpg' },
    { 'name': 'practice_once_E', 'path': 'my_stimuli/Stim_5.jpg' },
    { 'name': 'practice_once_D', 'path': 'my_stimuli/Stim_4.jpg' },
    { 'name': 'practice_main_C', 'path': 'my_stimuli/Stim_3.jpg' },
    { 'name': 'practice_main_B', 'path': 'my_stimuli/Stim_Y.jpg' },
    { 'name': 'practice_main_A', 'path': 'my_stimuli/Stim_X.jpg' },
    { 'name': 'pair2_F', 'path': 'my_stimuli/Stim_6.jpg' },
    { 'name': 'pair2_E', 'path': 'my_stimuli/Stim_5.jpg' },
    { 'name': 'pair2_D', 'path': 'my_stimuli/Stim_4.jpg' },
    { 'name': 'pair1_C', 'path': 'my_stimuli/Stim_3.jpg' },
    { 'name': 'pair1_B', 'path': 'my_stimuli/Stim_2.jpg' },
    { 'name': 'pair1_A', 'path': 'my_stimuli/Stim_1.jpg' },
    { 'name': 'my_stimuli/practice_tree_1.png', 'path': 'my_stimuli/practice_tree_1.png' },
    { 'name': 'my_stimuli/practice_tree_2.png', 'path': 'my_stimuli/practice_tree_2.png' },
    { 'name': 'my_stimuli/normal_tree.png', 'path': 'my_stimuli/normal_tree.png' },
    { 'name': 'my_stimuli/palm_tree.png', 'path': 'my_stimuli/palm_tree.png' },
    { 'name': 'cond_files/age_gender.xlsx', 'path': 'cond_files/age_gender.xlsx' },
    { 'name': 'cond_files/practice_questions_dec.xlsx', 'path': 'cond_files/practice_questions_dec.xlsx' }
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=75F6800A', '');

  return Scheduler.Event.NEXT;
}

const font_style = 'Arial'
var introslide1Clock;
var key_resp_44;
var instruct_height;
var continue_48;
var intro_20;
var introslide2Clock;
var key_resp_43;
var continue_47;
var intro_19;
var introslide3Clock;
var key_resp;
var continue_8;
var intro;
var introslide4Clock;
var intro_2;
var key_resp_3;
var continue_9;
var introslide5Clock;
var intro_3;
var key_resp_4;
var continue_10;
var age_genderClock;
var age_gender_form;
var key_resp_ag;
var continue_11;
var Instructions1Clock;
var intro_4;
var key_resp_9;
var continue_12;
var practice_fractal_l;
var practice_fractal_r;
var practice_fractal_m;

// context
var practice_color_code_1;
var practice_color_code_2;
var InstructionsContext0Clock;
var key_resp_context0;
var continue_context0;
var instr_context0;
var instr_context0_only;
var test1 = '\nPlease also note the changes of the background elements, which include the backgournd color and the tree images at the four corners.\n\nBackground contexts are         associated with which combination of shapes is being presented. Here are two example combinations in the next two slides.';
var test2 = '\n\n\n                       only';
var InstructionsContext1Clock;
var key_resp_context1;
var continue_context1;
var instruction_context_fractal_l;
var instruction_context_fractal_r;
var instr_context1;
var instruction_background;
var bgp_instruction_rt;
var bgp_instruction_lt;
var bgp_instruction_rd;
var bgp_instruction_ld;
var InstructionsContext2Clock;
var key_resp_context2;
var continue_context2;
var instr_context2;

var Instructions2Clock;
var instr_3;
var key_resp_10;
var continue_13;
var practice_fractal_l_3;
var practice_fractal_r_3;
var Instructions3Clock;
var outline_pl;
var intro_6;
var key_resp_11;
var continue_14;
var practice_fractal_l_2;
var practice_fractal_r_2;
var instr_4_text;
var practice_left_feed_text;
var practice_right_feed_text;
var practice_left_feed;
var practice_right_feed;
var Instructions4Clock;
var intro_5;
var key_resp_12;
var continue_15;
var Instructions5Clock;
var above_cross_text;
var key_resp_37;
var continue_41;
var below_cross_text;
var fixation;
var Instructions6Clock;
var intro_7;
var key_resp_13;
var continue_16;
var Instructions7Clock;
var intro_16;
var key_resp_40;
var continue_44;
var Instructions8Clock;
var intro_9;
var key_resp_15;
var continue_18;
var initialize_trials_to_run_prac1Clock;
var prac_noprobe_blockreps;
var misses;
var decision_pracClock;
var x_fa;
var x_fb;
var y_fa;
var y_fb;
var r_train;
var chosen_outcome_train;
var outcome_a_train;
var outcome_b_train;
var mouse;
var background_color_practice;
var bgp_practice_rt;
var bgp_practice_lt;
var bgp_practice_rd;
var bgp_practice_ld;
var fractal_a_dec_pl;
var fractal_b_dec_pr;
var choose_text_2;
var selected_pracClock;
var outline_fa_4;
var outline_fb_4;
var fractal_a_slctd_3;
var fractal_b_slctd_3;
var feedback_pracClock;
var y_outcome_text;
var feed_dur;
var outline_fa_5;
var outline_fb_5;
var fractal_a_fdbk_2;
var fractal_b_fdbk_2;
var outcome_amount_a_2;
var outcome_amount_b_2;
var slow_dec_messageClock;
var text_5;
var ITI_2Clock;
var polygon;
var pre_dec_qsClock;
var hyf_intro_3;
var key_resp_27;
var continue_29;
var initialize_qnrepsClock;
var practice_question_2Clock;
var poly_false_dec;
var poly_true_dec;
var Question;
var answer_true;
var answer_false;
var mouse_3;
var Click_on_an_answer;
var wrong_answerClock;
var intro_11;
var correct_answerClock;
var intro_12;
var key_resp_17;
var continue_20;
var Instructions10Clock;
var hyf_intro;
var key_resp_16;
var continue_19;
var pre_experiment_itiClock;
var text;
var block_primer_1Clock;
var blocks_run;
var primer_text;
var fractal_top_left;
var primer_next_1;
var continue_3;
var fractal_top_right;
var fractal_middle_left;
var fractal_middle_right;
var block_primer_2Clock;
var primer_2_text;
var primer_next_2;
var continue_4;
var initialize_trials_to_runClock;
var decisionClock;
var earnings;
var chosen_outcome;
var r_outcome_a;
var r_outcome_b;
var outcome_a;
var outcome_b;
var repeat_trial;
var mouse_2;

// background color and pictures
var background_color;
var background_color_left;
var background_color_right;
var bgp_rt;
var bgp_lt;
var bgp_ld;
var bgp_rd;
var fractal_size;

var fractal_a_dec;
var fractal_b_dec;
var choose_text;
var selectedClock;
var outline_fb;
var outline_fa;
var fractal_b_slctd;
var fractal_a_slctd;
var feedbackClock;
var outline_fb_2;
var outline_fa_2;
var fractal_b_fdbk;
var fractal_a_fdbk;
var outcome_amount_a;
var outcome_amount_b;
var pauseClock;
var key_resp_2;
var text_9;
var continue_pause;
var minutes;
var seconds;
var text_10;
var main_exp_endClock;
var payment_screenClock;
var text_3;
var key_resp_35;
var continue_37;
var save_variablesClock;
var globalClock;
var routineTimer;

// sequences
var learning_array_1 = [];
var learning_array_2 = [];
var learning_array_3 = [];
var learning_array_4 = [];
var transfer_array_1 = [];
var transfer_array_2 = [];
var transfer_array_3 = [];
var transfer_array_4 = [];
var learning_sequence = [];
var transfer_sequence = [];
var array_1 = [];
var array_2 = [];
var array_3 = [];
var array_4 = [];
var sequence = [];
var trial_index;
var first_pair_index;
var second_pair_index;
var stim_1_p;
var stim_2_p;
var stim_3_p;
var stim_4_p;
var learning_trial_num;
var transfer_trial_num;
var learning_trial_sub_num;
var transfer_trial_sub_num;
var learning_pair_sub_num;
var transfer_pair_sub_num;

// https://github.com/davidbau/seedrandom
Math.seedrandom('hello');

// Randomize array in-place using Durstenfeld shuffle algorithm (seems like this algorithm
// does not have bias)
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// psb is the possibility of reward, n is the total trial number
function createArray(psb, n) {
  let r = psb * n;
  var ary = [];
  for (let i = 0; i < r; i++) {
    ary.push(1);
  }
  for (let j = 0; j < n - r; j++) {
    ary.push(0);
  }
  return ary
}

// get window size function
// psychoJS.window.size[0] is the width, psychoJS.window.size[1] is the height
// this function returns the maximum right side amount in 'height' units 
function window_size(actual_size) {
  return (actual_size[0] / actual_size[1]) * 0.5
}

async function experimentInit() {
  practice_color_code_1 = [0.92157, 0.50980, 0.02745];
  practice_color_code_2 = [0.79216, 0.34510, 0.66667];
  fractal_size = 0.45;
  trial_index = 0;
  first_pair_index = 0;
  second_pair_index = 0;

  // --------------------(: this part is changable :)--------------------
  // possibilities
  stim_1_p = 0.5;
  stim_2_p = 0.5;
  stim_3_p = 0.5;
  stim_4_p = 0.5;

  // total trial number
  learning_trial_num = 12;
  transfer_trial_num = 12;

  // possibilities are the same in every n trials
  learning_trial_sub_num = 2;
  transfer_trial_sub_num = 2;

  // same amount of pairs in n trials
  learning_pair_sub_num = 6;
  transfer_pair_sub_num = 6;
  // --------------------(: this part is changable :)--------------------


  // check whether the possibilities and trial numbers match (integer)
  if (Number.isInteger((transfer_trial_num / 2) / transfer_trial_sub_num) == false ||
    Number.isInteger((learning_trial_num / 2) / learning_trial_sub_num) == false ||
    Number.isInteger(stim_1_p * learning_trial_sub_num) == false ||
    Number.isInteger(stim_2_p * learning_trial_sub_num) == false ||
    Number.isInteger(stim_3_p * learning_trial_sub_num) == false ||
    Number.isInteger(stim_4_p * learning_trial_sub_num) == false ||
    Number.isInteger(stim_1_p * transfer_trial_sub_num) == false ||
    Number.isInteger(stim_2_p * transfer_trial_sub_num) == false ||
    Number.isInteger(stim_3_p * transfer_trial_sub_num) == false ||
    Number.isInteger(stim_4_p * transfer_trial_sub_num) == false ||
    Number.isInteger(learning_trial_num / learning_pair_sub_num) == false ||
    Number.isInteger(transfer_trial_num / transfer_pair_sub_num) == false) {
    console.log("This is not an integer.");
    return quitPsychoJS('Wrong combination of the trial number and possibility . Goodbye!', false);
  }

  // create the reward sequences with subsequences
  for (let i = 0; i < ((learning_trial_num / 2) / learning_trial_sub_num); i++) {
    let temp = [];
    temp = createArray(stim_1_p, learning_trial_sub_num);
    shuffleArray(temp);
    learning_array_1 = learning_array_1.concat(temp);

    temp = createArray(stim_2_p, learning_trial_sub_num);
    shuffleArray(temp);
    learning_array_2 = learning_array_2.concat(temp);

    temp = createArray(stim_3_p, learning_trial_sub_num);
    shuffleArray(temp);
    learning_array_3 = learning_array_3.concat(temp);

    temp = createArray(stim_4_p, learning_trial_sub_num);
    shuffleArray(temp);
    learning_array_4 = learning_array_4.concat(temp);
  }

  for (let i = 0; i < ((transfer_trial_num / 2) / transfer_trial_sub_num); i++) {
    let temp = [];
    temp = createArray(stim_1_p, transfer_trial_sub_num);
    shuffleArray(temp);
    transfer_array_1 = transfer_array_1.concat(temp);

    temp = createArray(stim_2_p, transfer_trial_sub_num);
    shuffleArray(temp);
    transfer_array_2 = transfer_array_2.concat(temp);

    temp = createArray(stim_3_p, transfer_trial_sub_num);
    shuffleArray(temp);
    transfer_array_3 = transfer_array_3.concat(temp);

    temp = createArray(stim_4_p, transfer_trial_sub_num);
    shuffleArray(temp);
    transfer_array_4 = transfer_array_4.concat(temp);
  }

  array_1 = learning_array_1.concat(transfer_array_1);
  array_2 = learning_array_2.concat(transfer_array_2);
  array_3 = learning_array_3.concat(transfer_array_3);
  array_4 = learning_array_4.concat(transfer_array_4);

  // // display all the reward sequences
  // console.log(learning_array_1);
  // console.log(learning_array_2);
  // console.log(learning_array_3);
  // console.log(learning_array_4);
  // console.log(transfer_array_1);
  // console.log(transfer_array_2);
  // console.log(transfer_array_3);
  // console.log(transfer_array_4);
  console.log(array_1);
  console.log(array_2);
  console.log(array_3);
  console.log(array_4);

  // create the sequence of the pairs
  for (let i = 0; i < learning_trial_num / learning_pair_sub_num; i++) {
    let temp = [];
    temp = createArray(0.5, learning_pair_sub_num);
    shuffleArray(temp);
    learning_sequence = learning_sequence.concat(temp);
  }

  for (let i = 0; i < transfer_trial_num / transfer_pair_sub_num; i++) {
    let temp = [];
    temp = createArray(0.5, transfer_pair_sub_num);
    shuffleArray(temp);
    transfer_sequence = transfer_sequence.concat(temp);
  }

  sequence = learning_sequence.concat(transfer_sequence);
  // // diaplay the array
  console.log(learning_sequence);
  console.log(transfer_sequence);
  console.log(sequence);


  // Initialize components for Routine "introslide1"
  introslide1Clock = new util.Clock();
  key_resp_44 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  instruct_height = 0.05;


  continue_48 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_48',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  intro_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_20',
    text: 'This study is being conducted by researchers at the Chair of Neuroimaging at the Faculty of Psychology at TU Dresden, including Dr. Ben Wagner and Prof. Dr. Stefan Kiebel. The purpose of this study is to better understand decision-making processes. ',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -3.0
  });

  // Initialize components for Routine "introslide2"
  introslide2Clock = new util.Clock();
  key_resp_43 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  instruct_height = 0.05;

  continue_47 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_47',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  intro_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_19',
    text: "If you don't feel like continuing, please feel free to stop participation at any time. Just send an email to ben_jonathan.wagner@tu-dresden.de and let us know that you were not able to finish the experiment.",
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -3.0
  });

  // Initialize components for Routine "introslide3"
  introslide3Clock = new util.Clock();
  key_resp = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  instruct_height = 0.05;

  continue_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_8',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro',
    text: 'First of all, thank you for participating on our symbol learning task. For this task it is important that you read the instructions very carefully.',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -3.0
  });

  // Initialize components for Routine "introslide4"
  introslide4Clock = new util.Clock();
  intro_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_2',
    text: 'Please complete this experiment by yourself, in a quiet location with few distractions as possible. Please do not leave your computer, use your phone, listen to music, or engage in any other distracting behaviors. Thank you very much for contributing to science.',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_3 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_9',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  // Initialize components for Routine "introslide5"
  introslide5Clock = new util.Clock();
  intro_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_3',
    text: 'First, you have to enter your age and gender. Then we’ll provide instructions for the main experiment.',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_4 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_10',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  // Initialize components for Routine "age_gender"
  age_genderClock = new util.Clock();
  age_gender_form = new visual.Form({
    win: psychoJS.window, name: 'age_gender_form',
    items: 'cond_files/age_gender.xlsx',
    textHeight: 0.03,
    font: font_style,
    randomize: false,
    size: [1, 0.7],
    pos: [0, 0],
    style: 'dark',
    itemPadding: 0.05
  });
  key_resp_ag = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_11',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  // Initialize components for Routine "Instructions1"
  Instructions1Clock = new util.Clock();
  intro_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_4',
    text: '\nIn the main task, you’ll complete a series of "trials". On each so-called trial, you’ll be shown three shapes, and will be asked to choose one of them. You will see different combinations of shapes throughout the experiment, making choices among different combinations on different trials. Here’s one example of a shape combination:\n',
    font: font_style,
    units: undefined,
    pos: [0, 0.225], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_9 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_12',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  practice_fractal_l = new visual.ImageStim({
    win: psychoJS.window,
    name: 'practice_fractal_l', units: undefined,
    image: 'my_stimuli/Stim_5.jpg', mask: undefined,
    ori: 0.0, pos: [(- 0.50), (- 0.15)], size: [0.325, 0.325],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -3.0
  });
  practice_fractal_r = new visual.ImageStim({
    win: psychoJS.window,
    name: 'practice_fractal_r', units: undefined,
    image: 'my_stimuli/Stim_6.jpg', mask: undefined,
    ori: 0.0, pos: [0.0, (- 0.15)], size: [0.325, 0.325],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -4.0
  });
  practice_fractal_m = new visual.ImageStim({
    win: psychoJS.window,
    name: 'practice_fractal_m', units: undefined,
    image: 'my_stimuli/Stim_Y.jpg', mask: undefined,
    ori: 0.0, pos: [0.50, (- 0.15)], size: [0.325, 0.325],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -4.0
  });

  // Initialize components for Routine "Context0 Instruction"
  InstructionsContext0Clock = new util.Clock();
  instr_context0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_context0',
    text: test1,
    font: font_style,
    units: undefined,
    pos: [0, 0.225], height: 1.0, wrapWidth: 1.0, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -1.0
  });
  instr_context0_only = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_context0_only',
    text: test2,
    font: font_style,
    units: undefined,
    pos: [0, 0.225], height: 1.0, wrapWidth: 1.0, ori: 0.0,
    color: new util.Color('black'), opacity: undefined, bold: true,
    depth: -1.0
  });

  key_resp_context0 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_context0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_context0',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  // Initialize components for Routine "Context1 Instruction"
  InstructionsContext1Clock = new util.Clock();
  instr_context1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_context1',
    text: 'First Combination',
    font: font_style,
    units: undefined,
    pos: [0, 0.4125], height: 0.075, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -4.0
  });

  key_resp_context1 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_context1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_context1',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  instruction_context_fractal_l = new visual.ImageStim({
    win: psychoJS.window,
    name: 'instruction_context_fractal_l', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -3.0
  });
  instruction_context_fractal_r = new visual.ImageStim({
    win: psychoJS.window,
    name: 'instruction_context_fractal_r', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -4.0
  });

  instruction_background = new visual.Rect({
    win: psychoJS.window, name: 'instruction_background',
    units: 'norm',
    width: [0, 0], height: [0, 0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0, lineColor: undefined,
    fillColor: undefined,
    opacity: 1.0, depth: -1.0, interpolate: true,
  });

  bgp_instruction_rt = new visual.ImageStim({
    win: psychoJS.window,
    name: 'bgp_instruction_rt', units: 'height',
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.20, 0.25],
    color: new util.Color('lightblue'), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: 0.0
  });
  bgp_instruction_lt = new visual.ImageStim({
    win: psychoJS.window,
    name: 'bgp_instruction_lt', units: 'height',
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.20, 0.25],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: -10.0
  });
  bgp_instruction_rd = new visual.ImageStim({
    win: psychoJS.window,
    name: 'bgp_instruction_rd', units: 'height',
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.20, 0.25],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: -10.0
  });
  bgp_instruction_ld = new visual.ImageStim({
    win: psychoJS.window,
    name: 'bgp_instruction_ld', units: 'height',
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.20, 0.25],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: -10.0
  });

  // Initialize components for Routine "Context2 Instruction"
  InstructionsContext2Clock = new util.Clock();
  instr_context2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_context2',
    text: 'Second Combination',
    font: font_style,
    units: undefined,
    pos: [0, 0.4125], height: 0.075, wrapWidth: 1.0, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_context2 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_context2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_context2',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });
  // Initialize components for Routine "Instructions2"
  Instructions2Clock = new util.Clock();
  instr_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_3',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0.225], height: 1.0, wrapWidth: 1.0, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_10 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_13',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  practice_fractal_l_3 = new visual.ImageStim({
    win: psychoJS.window,
    name: 'practice_fractal_l_3', units: undefined,
    image: 'my_stimuli/Stim_5.jpg', mask: undefined,
    ori: 0.0, pos: [(- 0.25), (- 0.15)], size: [0.325, 0.325],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -3.0
  });
  practice_fractal_r_3 = new visual.ImageStim({
    win: psychoJS.window,
    name: 'practice_fractal_r_3', units: undefined,
    image: 'my_stimuli/Stim_6.jpg', mask: undefined,
    ori: 0.0, pos: [0.275, (- 0.15)], size: [0.325, 0.325],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -4.0
  });
  // Initialize components for Routine "Instructions3"
  Instructions3Clock = new util.Clock();
  outline_pl = new visual.Rect({
    win: psychoJS.window, name: 'outline_pl',
    width: [0.37, 0.37][0], height: [0.37, 0.37][1],
    ori: 0.0, pos: [(- 0.25), (- 0.035)],
    lineWidth: 1.0, lineColor: new util.Color('lightblue'),
    fillColor: new util.Color('lightblue'),
    opacity: undefined, depth: 0, interpolate: true,
  });

  intro_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_6',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0.3], height: 1.0, wrapWidth: 1.0, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -1.0
  });

  key_resp_11 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_14',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -3.0
  });

  practice_fractal_l_2 = new visual.ImageStim({
    win: psychoJS.window,
    name: 'practice_fractal_l_2', units: undefined,
    image: 'my_stimuli/Stim_5.jpg', mask: undefined,
    ori: 0.0, pos: [(- 0.25), (- 0.04)], size: [0.325, 0.325],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -4.0
  });
  practice_fractal_r_2 = new visual.ImageStim({
    win: psychoJS.window,
    name: 'practice_fractal_r_2', units: undefined,
    image: 'my_stimuli/Stim_6.jpg', mask: undefined,
    ori: 0.0, pos: [0.25, (- 0.04)], size: [0.325, 0.325],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -5.0
  });
  instr_4_text = "For example, this participant chose the left shape, resulting in a win of 0.1\u20ac. Had they chosen the other two shapes, they would have won nothing.";
  practice_left_feed_text = "+0.1\u20ac";
  practice_right_feed_text = " ";

  practice_left_feed = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_left_feed',
    text: '',
    font: font_style,
    units: undefined,
    pos: [(- 0.25), (- 0.27)], height: 0.072, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -7.0
  });

  practice_right_feed = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_right_feed',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0.25, (- 0.27)], height: 0.072, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -8.0
  });

  // Initialize components for Routine "Instructions4"
  Instructions4Clock = new util.Clock();
  intro_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_5',
    text: 'All outcomes correspond to real money! At the end of the experiment, you will be given a payment equal to your net earnings during the task.',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_12 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_15',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  // Initialize components for Routine "Instructions5"
  Instructions5Clock = new util.Clock();
  above_cross_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'above_cross_text',
    text: 'At the end of each trial, this cross will appear on the screen:\n\n',
    font: font_style,
    units: undefined,
    pos: [0, 0.2], height: 1.0, wrapWidth: 1.0, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_37 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_41 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_41',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  below_cross_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'below_cross_text',
    text: 'You don’t need to do anything when you see this cross. It merely tells you that the last trial is over and the next trial is about to start.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.1)], height: instruct_height, wrapWidth: 1.0, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -3.0
  });

  fixation = new visual.ShapeStim({
    win: psychoJS.window, name: 'fixation',
    vertices: 'cross', size: [0.07, 0.07],
    ori: 0.0, pos: [0, 0.1],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -4, interpolate: true,
  });

  // Initialize components for Routine "Instructions6"
  Instructions6Clock = new util.Clock();
  intro_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_7',
    text: 'You will complete many trials with each combination of shapes. That is, you will choose among the same shapes many times. All shapes will sometimes lead to wins and sometimes lead to nothing. However, some shapes are better than others on average. You must learn which shapes to choose – and which to avoid - through trial and error.',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_13 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_16',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  // Initialize components for Routine "Instructions7"
  Instructions7Clock = new util.Clock();
  intro_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_16',
    text: 'In detail, every shape has its own unique value or in other words, a unique probability for winning. For example, one shape may lead to winning money in 50% of all trials, while another shape may lead to winning money in only 30% of all trials. You must learn which shapes are better by paying attention to the outcomes. ',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_40 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_44 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_44',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  // Initialize components for Routine "Instructions8"
  Instructions8Clock = new util.Clock();
  intro_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_9',
    text: 'Now, let’s try some practice trials. Use your mouse and press the left mouse button to indicate your choice. Note, you will only receive the outcome of the chosen option.',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_15 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_18',
    text: 'Press the right arrow to play practice trials.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  // Initialize components for Routine "initialize_trials_to_run_prac1"
  initialize_trials_to_run_prac1Clock = new util.Clock();
  prac_noprobe_blockreps = 0;
  misses = 0;

  // Initialize components for Routine "decision_prac"
  decision_pracClock = new util.Clock();
  x_fa = 0;
  x_fb = 0;
  y_fa = 0;
  y_fb = 0;
  r_train = 0;

  chosen_outcome_train = 0;
  outcome_a_train = 0;
  outcome_b_train = 0;

  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // add background color using rect
  background_color_practice = new visual.Rect({
    win: psychoJS.window, name: 'background_color_practice',
    units: 'norm',
    width: [0, 0], height: [0, 0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0, lineColor: undefined,
    fillColor: undefined,
    opacity: 1.0, depth: -1, interpolate: true,
  });

  // add context tree pictures to the practice run
  bgp_practice_rt = new visual.ImageStim({
    win: psychoJS.window,
    name: 'bgp_practice_rt', units: 'height',
    image: 'my_stimuli/practice_tree_2.png', mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.20, 0.25],
    color: new util.Color('lightblue'), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: 0.0
  });
  bgp_practice_lt = new visual.ImageStim({
    win: psychoJS.window,
    name: 'bgp_practice_lt', units: 'height',
    image: 'my_stimuli/practice_tree_2.png', mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.20, 0.25],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: -10.0
  });
  bgp_practice_rd = new visual.ImageStim({
    win: psychoJS.window,
    name: 'bgp_practice_rd', units: 'height',
    image: 'my_stimuli/practice_tree_2.png', mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.20, 0.25],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: -10.0
  });
  bgp_practice_ld = new visual.ImageStim({
    win: psychoJS.window,
    name: 'bgp_practice_ld', units: 'height',
    image: 'my_stimuli/practice_tree_2.png', mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.20, 0.25],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: -10.0
  });

  fractal_a_dec_pl = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_a_dec_pl', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -2.0
  });
  fractal_b_dec_pr = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_b_dec_pr', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -3.0
  });
  choose_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choose_text_2',
    text: 'Choose:',
    font: font_style,
    units: undefined,
    pos: [0, 0.4125], height: 0.075, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -4.0
  });

  // Initialize components for Routine "selected_prac"
  selected_pracClock = new util.Clock();
  outline_fa_4 = new visual.Rect({
    win: psychoJS.window, name: 'outline_fa_4',
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('lightblue'),
    fillColor: new util.Color('lightblue'),
    opacity: 1.0, depth: 0, interpolate: true,
  });

  outline_fb_4 = new visual.Rect({
    win: psychoJS.window, name: 'outline_fb_4',
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('lightblue'),
    fillColor: new util.Color('lightblue'),
    opacity: 1.0, depth: -1, interpolate: true,
  });

  fractal_a_slctd_3 = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_a_slctd_3', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -2.0
  });
  fractal_b_slctd_3 = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_b_slctd_3', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -3.0
  });
  // Initialize components for Routine "feedback_prac"
  feedback_pracClock = new util.Clock();
  y_outcome_text = (- 0.25);
  feed_dur = 3.75;

  outline_fa_5 = new visual.Rect({
    win: psychoJS.window, name: 'outline_fa_5',
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('lightblue'),
    fillColor: new util.Color('lightblue'),
    opacity: 1.0, depth: -1, interpolate: true,
  });

  outline_fb_5 = new visual.Rect({
    win: psychoJS.window, name: 'outline_fb_5',
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('lightblue'),
    fillColor: new util.Color('lightblue'),
    opacity: 1.0, depth: -2, interpolate: true,
  });

  fractal_a_fdbk_2 = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_a_fdbk_2', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -3.0
  });
  fractal_b_fdbk_2 = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_b_fdbk_2', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -4.0
  });
  outcome_amount_a_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome_amount_a_2',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 0.1, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'), opacity: undefined,
    depth: -5.0
  });

  outcome_amount_b_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome_amount_b_2',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 0.1, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'), opacity: undefined,
    depth: -6.0
  });

  // Initialize components for Routine "slow_dec_message"
  slow_dec_messageClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Too slow! Choose within 2.5 seconds.',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 0.1, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -1.0
  });

  // Initialize components for Routine "ITI_2"
  ITI_2Clock = new util.Clock();
  polygon = new visual.ShapeStim({
    win: psychoJS.window, name: 'polygon',
    vertices: 'cross', size: [0.07, 0.07],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: 0, interpolate: true,
  });

  // Initialize components for Routine "pre_dec_qs"
  pre_dec_qsClock = new util.Clock();
  hyf_intro_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'hyf_intro_3',
    text: 'Now, we’ll ask a few questions to make sure you understood the instructions.',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_27 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_29',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  // Initialize components for Routine "initialize_qnreps"
  initialize_qnrepsClock = new util.Clock();
  // Initialize components for Routine "practice_question_2"
  practice_question_2Clock = new util.Clock();
  poly_false_dec = new visual.Rect({
    win: psychoJS.window, name: 'poly_false_dec',
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 5.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });

  poly_true_dec = new visual.Rect({
    win: psychoJS.window, name: 'poly_true_dec',
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 5.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });

  Question = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0.2], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  answer_true = new visual.TextStim({
    win: psychoJS.window,
    name: 'answer_true',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -3.0
  });

  answer_false = new visual.TextStim({
    win: psychoJS.window,
    name: 'answer_false',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -4.0
  });

  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  Click_on_an_answer = new visual.TextStim({
    win: psychoJS.window,
    name: 'Click_on_an_answer',
    text: 'Click one of the boxes to answer.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -7.0
  });

  // Initialize components for Routine "wrong_answer"
  wrong_answerClock = new util.Clock();
  intro_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_11',
    text: 'Not quite! Try again.',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  // Initialize components for Routine "correct_answer"
  correct_answerClock = new util.Clock();
  intro_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_12',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_17 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_20',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -3.0
  });

  // Initialize components for Routine "Instructions10"
  Instructions10Clock = new util.Clock();
  hyf_intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'hyf_intro',
    text: 'Good job! Now the real experiment starts. Therefore we will use different symbols than in the training. One last note before we start: If you are uncertain which shape to pick, just go with your gut intuition. Over time you will learn which symbols are better than others. ',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 1.0, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: 0.0
  });

  key_resp_16 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_19',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  // Initialize components for Routine "pre_experiment_iti"
  pre_experiment_itiClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Any text\n\nincluding line breaks',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 0.1, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'), opacity: undefined,
    depth: 0.0
  });

  // Initialize components for Routine "block_primer_1"
  block_primer_1Clock = new util.Clock();
  blocks_run = 0;

  primer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'primer_text',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0.35], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('Black'), opacity: undefined,
    depth: -1.0
  });

  fractal_top_left = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_top_left', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.2, 0.2],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -2.0
  });
  primer_next_1 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_3',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: 1.0, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -4.0
  });

  fractal_top_right = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_top_right', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.2, 0.2],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -5.0
  });
  fractal_middle_left = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_middle_left', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.2, 0.2],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -6.0
  });
  fractal_middle_right = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_middle_right', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.2, 0.2],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -7.0
  });
  // Initialize components for Routine "block_primer_2"
  block_primer_2Clock = new util.Clock();
  primer_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'primer_2_text',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('Black'), opacity: undefined,
    depth: -1.0
  });

  primer_next_2 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_4',
    text: 'Please press the right arrow to start!',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -3.0
  });

  // Initialize components for Routine "initialize_trials_to_run"
  initialize_trials_to_runClock = new util.Clock();


  // Initialize components for Routine "decision"
  decisionClock = new util.Clock();
  earnings = 0;
  chosen_outcome = 0;
  r_outcome_a = 0;
  r_outcome_b = 0;
  outcome_a = 0;
  outcome_b = 0;
  repeat_trial = 0;

  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();

  background_color = new visual.Rect({
    win: psychoJS.window, name: 'background_color',
    units: 'norm',
    width: [0, 0], height: [0, 0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0, lineColor: undefined,
    fillColor: undefined,
    opacity: 1.0, depth: -1, interpolate: true,
  });
  background_color_left = new visual.Rect({
    win: psychoJS.window, name: 'background_color_left',
    units: 'norm',
    width: [0, 0], height: [0, 0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0, lineColor: undefined,
    fillColor: undefined,
    opacity: 1.0, depth: -1, interpolate: true,
  });
  background_color_right = new visual.Rect({
    win: psychoJS.window, name: 'background_color_right',
    units: 'norm',
    width: [0, 0], height: [0, 0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0, lineColor: undefined,
    fillColor: undefined,
    opacity: 1.0, depth: -1, interpolate: true,
  });
  // add context tree pictures to the practice run
  bgp_rt = new visual.ImageStim({
    win: psychoJS.window,
    name: 'bgp_rt', units: 'height',
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.20, 0.25],
    color: new util.Color('lightblue'), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: 0.0
  });
  bgp_lt = new visual.ImageStim({
    win: psychoJS.window,
    name: 'bgp_lt', units: 'height',
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.20, 0.25],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: -10.0
  });
  bgp_rd = new visual.ImageStim({
    win: psychoJS.window,
    name: 'bgp_rd', units: 'height',
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.20, 0.25],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: -10.0
  });
  bgp_ld = new visual.ImageStim({
    win: psychoJS.window,
    name: 'bgp_ld', units: 'height',
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.20, 0.25],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: -10.0
  });

  fractal_a_dec = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_a_dec', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -2.0
  });
  fractal_b_dec = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_b_dec', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -3.0
  });
  choose_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choose_text',
    text: 'Choose:',
    font: font_style,
    units: undefined,
    pos: [0, 0.4125], height: 0.075, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -4.0
  });

  // Initialize components for Routine "selected"
  selectedClock = new util.Clock();
  outline_fb = new visual.Rect({
    win: psychoJS.window, name: 'outline_fb',
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('lightblue'),
    fillColor: new util.Color('lightblue'),
    opacity: 1.0, depth: 0, interpolate: true,
  });

  outline_fa = new visual.Rect({
    win: psychoJS.window, name: 'outline_fa',
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('lightblue'),
    fillColor: new util.Color('lightblue'),
    opacity: 1.0, depth: -1, interpolate: true,
  });

  fractal_b_slctd = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_b_slctd', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -2.0
  });
  fractal_a_slctd = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_a_slctd', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -3.0
  });
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  outline_fb_2 = new visual.Rect({
    win: psychoJS.window, name: 'outline_fb_2',
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('lightblue'),
    fillColor: new util.Color('lightblue'),
    opacity: 1.0, depth: 0, interpolate: true,
  });

  outline_fa_2 = new visual.Rect({
    win: psychoJS.window, name: 'outline_fa_2',
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('lightblue'),
    fillColor: new util.Color('lightblue'),
    opacity: 1.0, depth: -1, interpolate: true,
  });

  fractal_b_fdbk = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_b_fdbk', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -2.0
  });
  fractal_a_fdbk = new visual.ImageStim({
    win: psychoJS.window,
    name: 'fractal_a_fdbk', units: undefined,
    image: undefined, mask: undefined,
    ori: 0.0, pos: [0, 0], size: [0.45, 0.45],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: false, depth: -3.0
  });
  outcome_amount_a = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome_amount_a',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 0.1, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'), opacity: undefined,
    depth: -5.0
  });

  outcome_amount_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome_amount_b',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 0.1, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'), opacity: undefined,
    depth: -6.0
  });

  // Initialize components for Routine "pause"
  pauseClock = new util.Clock();
  key_resp_2 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'A short break, please wait and relax. Do not close this window and do not press any button until the countdown ends. You will be able to press the right arrow and continue in 3 minutes.',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -1.0
  });

  continue_pause = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_pause',
    text: 'Please press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -2.0
  });

  minutes = 0
  seconds = 0
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.1, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -4.0
  });

  // Initialize components for Routine "main_exp_end"
  main_exp_endClock = new util.Clock();
  // Initialize components for Routine "payment_screen"
  payment_screenClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: font_style,
    units: undefined,
    pos: [0, 0], height: instruct_height, wrapWidth: 1.0, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -1.0
  });

  key_resp_35 = new core.Keyboard({ psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true });

  continue_37 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_37',
    text: 'Press the right arrow to continue.',
    font: font_style,
    units: undefined,
    pos: [0, (- 0.4)], height: 0.05, wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'), opacity: undefined,
    depth: -3.0
  });

  // Initialize components for Routine "save_variables"
  save_variablesClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_44_allKeys;
var introslide1Components;
function introslide1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'introslide1'-------
    t = 0;
    introslide1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_44.keys = undefined;
    key_resp_44.rt = undefined;
    _key_resp_44_allKeys = [];
    intro_20.setHeight(instruct_height);
    // keep track of which components have finished
    introslide1Components = [];
    introslide1Components.push(key_resp_44);
    introslide1Components.push(continue_48);
    introslide1Components.push(intro_20);

    for (const thisComponent of introslide1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introslide1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'introslide1'-------
    // get current time
    t = introslide1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *key_resp_44* updates
    if (t >= 6 && key_resp_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_44.tStart = t;  // (not accounting for frame time here)
      key_resp_44.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_44.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_44.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_44.clearEvents(); });
    }

    if (key_resp_44.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_44.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_44_allKeys = _key_resp_44_allKeys.concat(theseKeys);
      if (_key_resp_44_allKeys.length > 0) {
        key_resp_44.keys = _key_resp_44_allKeys[_key_resp_44_allKeys.length - 1].name;  // just the last key pressed
        key_resp_44.rt = _key_resp_44_allKeys[_key_resp_44_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_48* updates
    if (t >= 6 && continue_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_48.tStart = t;  // (not accounting for frame time here)
      continue_48.frameNStart = frameN;  // exact frame index

      continue_48.setAutoDraw(true);
    }


    // *intro_20* updates
    if (t >= 0.0 && intro_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_20.tStart = t;  // (not accounting for frame time here)
      intro_20.frameNStart = frameN;  // exact frame index

      intro_20.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introslide1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introslide1RoutineEnd() {
  return async function () {
    //------Ending Routine 'introslide1'-------
    for (const thisComponent of introslide1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_44.keys', key_resp_44.keys);
    if (typeof key_resp_44.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_44.rt', key_resp_44.rt);
      routineTimer.reset();
    }

    key_resp_44.stop();
    // the Routine "introslide1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_43_allKeys;
var introslide2Components;
function introslide2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'introslide2'-------
    t = 0;
    introslide2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_43.keys = undefined;
    key_resp_43.rt = undefined;
    _key_resp_43_allKeys = [];
    intro_19.setHeight(instruct_height);
    // keep track of which components have finished
    introslide2Components = [];
    introslide2Components.push(key_resp_43);
    introslide2Components.push(continue_47);
    introslide2Components.push(intro_19);

    for (const thisComponent of introslide2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introslide2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'introslide2'-------
    // get current time
    t = introslide2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *key_resp_43* updates
    if (t >= 6 && key_resp_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_43.tStart = t;  // (not accounting for frame time here)
      key_resp_43.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_43.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_43.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_43.clearEvents(); });
    }

    if (key_resp_43.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_43.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_43_allKeys = _key_resp_43_allKeys.concat(theseKeys);
      if (_key_resp_43_allKeys.length > 0) {
        key_resp_43.keys = _key_resp_43_allKeys[_key_resp_43_allKeys.length - 1].name;  // just the last key pressed
        key_resp_43.rt = _key_resp_43_allKeys[_key_resp_43_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_47* updates
    if (t >= 6 && continue_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_47.tStart = t;  // (not accounting for frame time here)
      continue_47.frameNStart = frameN;  // exact frame index

      continue_47.setAutoDraw(true);
    }


    // *intro_19* updates
    if (t >= 0.0 && intro_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_19.tStart = t;  // (not accounting for frame time here)
      intro_19.frameNStart = frameN;  // exact frame index

      intro_19.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introslide2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introslide2RoutineEnd() {
  return async function () {
    //------Ending Routine 'introslide2'-------
    for (const thisComponent of introslide2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_43.keys', key_resp_43.keys);
    if (typeof key_resp_43.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_43.rt', key_resp_43.rt);
      routineTimer.reset();
    }

    key_resp_43.stop();
    // the Routine "introslide2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var introslide3Components;
function introslide3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'introslide3'-------
    t = 0;
    introslide3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    intro.setHeight(instruct_height);
    // keep track of which components have finished
    introslide3Components = [];
    introslide3Components.push(key_resp);
    introslide3Components.push(continue_8);
    introslide3Components.push(intro);

    for (const thisComponent of introslide3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introslide3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'introslide3'-------
    // get current time
    t = introslide3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *key_resp* updates
    if (t >= 5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_8* updates
    if (t >= 5 && continue_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_8.tStart = t;  // (not accounting for frame time here)
      continue_8.frameNStart = frameN;  // exact frame index

      continue_8.setAutoDraw(true);
    }


    // *intro* updates
    if (t >= 0 && intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro.tStart = t;  // (not accounting for frame time here)
      intro.frameNStart = frameN;  // exact frame index

      intro.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introslide3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introslide3RoutineEnd() {
  return async function () {
    //------Ending Routine 'introslide3'-------
    for (const thisComponent of introslide3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
      routineTimer.reset();
    }

    key_resp.stop();
    // the Routine "introslide3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var introslide4Components;
function introslide4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'introslide4'-------
    t = 0;
    introslide4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_2.setHeight(instruct_height);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    introslide4Components = [];
    introslide4Components.push(intro_2);
    introslide4Components.push(key_resp_3);
    introslide4Components.push(continue_9);

    for (const thisComponent of introslide4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introslide4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'introslide4'-------
    // get current time
    t = introslide4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *intro_2* updates
    if (t >= 0.0 && intro_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_2.tStart = t;  // (not accounting for frame time here)
      intro_2.frameNStart = frameN;  // exact frame index

      intro_2.setAutoDraw(true);
    }


    // *key_resp_3* updates
    if (t >= 5 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_9* updates
    if (t >= 5 && continue_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_9.tStart = t;  // (not accounting for frame time here)
      continue_9.frameNStart = frameN;  // exact frame index

      continue_9.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introslide4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introslide4RoutineEnd() {
  return async function () {
    //------Ending Routine 'introslide4'-------
    for (const thisComponent of introslide4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
      routineTimer.reset();
    }

    key_resp_3.stop();
    // the Routine "introslide4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var introslide5Components;
function introslide5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'introslide5'-------
    t = 0;
    introslide5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_3.setHeight(instruct_height);
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    introslide5Components = [];
    introslide5Components.push(intro_3);
    introslide5Components.push(key_resp_4);
    introslide5Components.push(continue_10);

    for (const thisComponent of introslide5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introslide5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'introslide5'-------
    // get current time
    t = introslide5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *intro_3* updates
    if (t >= 0.0 && intro_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_3.tStart = t;  // (not accounting for frame time here)
      intro_3.frameNStart = frameN;  // exact frame index

      intro_3.setAutoDraw(true);
    }


    // *key_resp_4* updates
    if (t >= 4 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_10* updates
    if (t >= 4 && continue_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_10.tStart = t;  // (not accounting for frame time here)
      continue_10.frameNStart = frameN;  // exact frame index

      continue_10.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introslide5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introslide5RoutineEnd() {
  return async function () {
    //------Ending Routine 'introslide5'-------
    for (const thisComponent of introslide5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
      routineTimer.reset();
    }

    key_resp_4.stop();
    // the Routine "introslide5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_ag_allKeys;
var age_genderComponents;
function age_genderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'age_gender'-------
    t = 0;
    age_genderClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_ag.keys = undefined;
    key_resp_ag.rt = undefined;
    _key_resp_ag_allKeys = [];
    // keep track of which components have finished
    age_genderComponents = [];
    age_genderComponents.push(age_gender_form);
    age_genderComponents.push(key_resp_ag);
    age_genderComponents.push(continue_11);

    for (const thisComponent of age_genderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function age_genderRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'age_gender'-------
    // get current time
    t = age_genderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *age_gender_form* updates
    if (t >= 0.0 && age_gender_form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_gender_form.tStart = t;  // (not accounting for frame time here)
      age_gender_form.frameNStart = frameN;  // exact frame index

      age_gender_form.setAutoDraw(true);
    }


    // *key_resp_ag* updates
    if (t >= 8 && key_resp_ag.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_ag.tStart = t;  // (not accounting for frame time here)
      key_resp_ag.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_ag.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_ag.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_ag.clearEvents(); });
    }

    if (key_resp_ag.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_ag.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_ag_allKeys = _key_resp_ag_allKeys.concat(theseKeys);
      if (_key_resp_ag_allKeys.length > 0) {
        key_resp_ag.keys = _key_resp_ag_allKeys[_key_resp_ag_allKeys.length - 1].name;  // just the last key pressed
        key_resp_ag.rt = _key_resp_ag_allKeys[_key_resp_ag_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_11* updates
    if (t >= 8 && continue_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_11.tStart = t;  // (not accounting for frame time here)
      continue_11.frameNStart = frameN;  // exact frame index

      continue_11.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of age_genderComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function age_genderRoutineEnd() {
  return async function () {
    //------Ending Routine 'age_gender'-------
    for (const thisComponent of age_genderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    age_gender_form.addDataToExp(psychoJS.experiment, 'rows');
    psychoJS.experiment.addData('key_resp_ag.keys', key_resp_ag.keys);
    if (typeof key_resp_ag.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_ag.rt', key_resp_ag.rt);
      routineTimer.reset();
    }

    key_resp_ag.stop();
    // the Routine "age_gender" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var Instructions1Components;
function Instructions1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'Instructions1'-------
    t = 0;
    Instructions1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_4.setHeight(instruct_height);
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    Instructions1Components = [];
    Instructions1Components.push(intro_4);
    Instructions1Components.push(key_resp_9);
    Instructions1Components.push(continue_12);
    Instructions1Components.push(practice_fractal_l);
    Instructions1Components.push(practice_fractal_r);

    for (const thisComponent of Instructions1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions1'-------
    // get current time
    t = Instructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *intro_4* updates
    if (t >= 0.0 && intro_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_4.tStart = t;  // (not accounting for frame time here)
      intro_4.frameNStart = frameN;  // exact frame index

      intro_4.setAutoDraw(true);
    }


    // *key_resp_9* updates
    if (t >= 10 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_12* updates
    if (t >= 10 && continue_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_12.tStart = t;  // (not accounting for frame time here)
      continue_12.frameNStart = frameN;  // exact frame index

      continue_12.setAutoDraw(true);
    }


    // *practice_fractal_l* updates
    if (t >= 0.0 && practice_fractal_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_fractal_l.tStart = t;  // (not accounting for frame time here)
      practice_fractal_l.frameNStart = frameN;  // exact frame index

      practice_fractal_l.setAutoDraw(true);
    }


    // *practice_fractal_r* updates
    if (t >= 0.0 && practice_fractal_r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_fractal_r.tStart = t;  // (not accounting for frame time here)
      practice_fractal_r.frameNStart = frameN;  // exact frame index

      practice_fractal_r.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions1'-------
    for (const thisComponent of Instructions1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
      routineTimer.reset();
    }

    key_resp_9.stop();
    // the Routine "Instructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}

var _key_resp_context0_allKeys;
var InstructionsContext0Components;
function Instructions0ContextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'Instructions0Context'-------
    t = 0;
    InstructionsContext0Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise

    // update component parameters for each repeat
    instr_context0.setHeight(instruct_height);
    instr_context0_only.setHeight(instruct_height);
    key_resp_context0.keys = undefined;
    key_resp_context0.rt = undefined;
    _key_resp_context0_allKeys = [];

    // keep track of which components have finished
    InstructionsContext1Components = [];
    InstructionsContext1Components.push(instr_context0);
    InstructionsContext1Components.push(instr_context0_only);
    InstructionsContext1Components.push(key_resp_context0);
    InstructionsContext1Components.push(continue_context0);

    for (const thisComponent of InstructionsContext1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions0ContextRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'InstructionsContext0'-------
    // get current time
    t = InstructionsContext0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *instr_context0* updates
    if (t >= 0.0 && instr_context0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_context0.tStart = t;  // (not accounting for frame time here)
      instr_context0.frameNStart = frameN;  // exact frame index

      instr_context0.setAutoDraw(true);
    }

    // *instr_context0_only* updates
    if (t >= 0.0 && instr_context0_only.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_context0_only.tStart = t;  // (not accounting for frame time here)
      instr_context0_only.frameNStart = frameN;  // exact frame index

      instr_context0_only.setAutoDraw(true);
    }

    // *key_resp_context0* updates
    if (t >= 6 && key_resp_context0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_context0.tStart = t;  // (not accounting for frame time here)
      key_resp_context0.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_context0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_context0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_context0.clearEvents(); });
    }

    if (key_resp_context0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_context0.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_context0_allKeys = _key_resp_context0_allKeys.concat(theseKeys);
      if (_key_resp_context0_allKeys.length > 0) {
        key_resp_context0.keys = _key_resp_context0_allKeys[_key_resp_context0_allKeys.length - 1].name;  // just the last key pressed
        key_resp_context0.rt = _key_resp_context0_allKeys[_key_resp_context0_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_context0* updates
    if (t >= 6 && continue_context0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_context0.tStart = t;  // (not accounting for frame time here)
      continue_context0.frameNStart = frameN;  // exact frame index

      continue_context0.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsContext1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions0ContextRoutineEnd() {
  return async function () {
    //------Ending Routine 'InstructionsContext'-------
    for (const thisComponent of InstructionsContext1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_context0.keys', key_resp_context0.keys);
    if (typeof key_resp_context0.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_context0.rt', key_resp_context0.rt);
      routineTimer.reset();
    }

    key_resp_context0.stop();
    // the Routine "InstructionsContext" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}

var _key_resp_context1_allKeys;
var InstructionsContext1Components;
var instruction_context_fractal_size;
var instruction_context_fractal_pos;
function Instructions1ContextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'Instructions1Context'-------
    t = 0;
    InstructionsContext1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise

    if (window_size(psychoJS.window.size) > 0.56) {
      instruction_context_fractal_size = 0.45;
      instruction_context_fractal_pos = 0.45 * window_size(psychoJS.window.size);
    } else if (window_size(psychoJS.window.size) > 0.45) {
      instruction_context_fractal_size = window_size(psychoJS.window.size) * 0.8;
      instruction_context_fractal_pos = 0.45 * window_size(psychoJS.window.size) / (0.35 + window_size(psychoJS.window.size));
    } else {
      instruction_context_fractal_size = window_size(psychoJS.window.size);
      instruction_context_fractal_pos = 0.45 * window_size(psychoJS.window.size) / (0.3 + window_size(psychoJS.window.size));
    }
    // update component parameters for each repeat
    key_resp_context1.keys = undefined;
    key_resp_context1.rt = undefined;
    _key_resp_context1_allKeys = [];
    instruction_background.setWidth(2);
    instruction_background.setHeight(2);
    instruction_background.setFillColor(practice_color_code_1);
    instruction_context_fractal_l.setImage('my_stimuli/Stim_5.jpg');
    instruction_context_fractal_r.setImage('my_stimuli/Stim_6.jpg');
    instruction_context_fractal_l.setPos([instruction_context_fractal_pos, 0.05]);
    instruction_context_fractal_r.setPos([-instruction_context_fractal_pos, 0.05]);
    instruction_context_fractal_l.setSize([instruction_context_fractal_size, instruction_context_fractal_size]);
    instruction_context_fractal_r.setSize([instruction_context_fractal_size, instruction_context_fractal_size]);
    bgp_instruction_rt.setImage('my_stimuli/practice_tree_1.png');
    bgp_instruction_lt.setImage('my_stimuli/practice_tree_1.png');
    bgp_instruction_rd.setImage('my_stimuli/practice_tree_1.png');
    bgp_instruction_ld.setImage('my_stimuli/practice_tree_1.png');
    bgp_instruction_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
    bgp_instruction_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
    bgp_instruction_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
    bgp_instruction_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
    // keep track of which components have finished
    InstructionsContext1Components = [];
    InstructionsContext1Components.push(instr_context1);
    InstructionsContext1Components.push(key_resp_context1);
    InstructionsContext1Components.push(continue_context1);
    InstructionsContext1Components.push(instruction_context_fractal_l);
    InstructionsContext1Components.push(instruction_context_fractal_r);
    InstructionsContext1Components.push(instruction_background);
    InstructionsContext1Components.push(bgp_instruction_rt);
    InstructionsContext1Components.push(bgp_instruction_lt);
    InstructionsContext1Components.push(bgp_instruction_rd);
    InstructionsContext1Components.push(bgp_instruction_ld);

    for (const thisComponent of InstructionsContext1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions1ContextRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions1'-------
    // get current time
    t = InstructionsContext1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *instruction_background* updates
    if (t >= 0.0 && instruction_background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_background.tStart = t;  // (not accounting for frame time here)
      instruction_background.frameNStart = frameN;  // exact frame index

      instruction_background.setAutoDraw(true);
    }

    // *bgp_instruction_rt* updates
    if (t >= 0.0 && bgp_instruction_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_instruction_rt.tStart = t;  // (not accounting for frame time here)
      bgp_instruction_rt.frameNStart = frameN;  // exact frame index

      bgp_instruction_rt.setAutoDraw(true);
    }

    // *bgp_instruction_lt* updates
    if (t >= 0.0 && bgp_instruction_lt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_instruction_lt.tStart = t;  // (not accounting for frame time here)
      bgp_instruction_lt.frameNStart = frameN;  // exact frame index

      bgp_instruction_lt.setAutoDraw(true);
    }

    // *bgp_instruction_rd* updates
    if (t >= 0.0 && bgp_instruction_rd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_instruction_rd.tStart = t;  // (not accounting for frame time here)
      bgp_instruction_rd.frameNStart = frameN;  // exact frame index

      bgp_instruction_rd.setAutoDraw(true);
    }

    // *bgp_instruction_ld* updates
    if (t >= 0.0 && bgp_instruction_ld.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_instruction_ld.tStart = t;  // (not accounting for frame time here)
      bgp_instruction_ld.frameNStart = frameN;  // exact frame index

      bgp_instruction_ld.setAutoDraw(true);
    }

    // *instr_context1* updates
    if (t >= 0.0 && instr_context1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_context1.tStart = t;  // (not accounting for frame time here)
      instr_context1.frameNStart = frameN;  // exact frame index

      instr_context1.setAutoDraw(true);
    }


    // *key_resp_context1* updates
    if (t >= 6 && key_resp_context1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_context1.tStart = t;  // (not accounting for frame time here)
      key_resp_context1.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_context1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_context1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_context1.clearEvents(); });
    }

    if (key_resp_context1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_context1.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_context1_allKeys = _key_resp_context1_allKeys.concat(theseKeys);
      if (_key_resp_context1_allKeys.length > 0) {
        key_resp_context1.keys = _key_resp_context1_allKeys[_key_resp_context1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_context1.rt = _key_resp_context1_allKeys[_key_resp_context1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_context1* updates
    if (t >= 6 && continue_context1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_context1.tStart = t;  // (not accounting for frame time here)
      continue_context1.frameNStart = frameN;  // exact frame index

      continue_context1.setAutoDraw(true);
    }


    // *instruction_context_fractal_l* updates
    if (t >= 0.0 && instruction_context_fractal_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_context_fractal_l.tStart = t;  // (not accounting for frame time here)
      instruction_context_fractal_l.frameNStart = frameN;  // exact frame index

      instruction_context_fractal_l.setAutoDraw(true);
    }


    // *instruction_context_fractal_r* updates
    if (t >= 0.0 && instruction_context_fractal_r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_context_fractal_r.tStart = t;  // (not accounting for frame time here)
      instruction_context_fractal_r.frameNStart = frameN;  // exact frame index

      instruction_context_fractal_r.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsContext1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions1ContextRoutineEnd() {
  return async function () {
    //------Ending Routine 'InstructionsContext'-------
    for (const thisComponent of InstructionsContext1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_context1.keys', key_resp_context1.keys);
    if (typeof key_resp_context1.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_context1.rt', key_resp_context1.rt);
      routineTimer.reset();
    }

    key_resp_context1.stop();
    // the Routine "InstructionsContext" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}

var _key_resp_context2_allKeys;
var InstructionsContext2Components;
var instruction_context_fractal_size;
var instruction_context_fractal_pos;
function Instructions2ContextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'Instructions2Context'-------
    t = 0;
    InstructionsContext2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise

    if (window_size(psychoJS.window.size) > 0.56) {
      instruction_context_fractal_size = 0.45;
      instruction_context_fractal_pos = 0.45 * window_size(psychoJS.window.size);
    } else if (window_size(psychoJS.window.size) > 0.45) {
      instruction_context_fractal_size = window_size(psychoJS.window.size) * 0.8;
      instruction_context_fractal_pos = 0.45 * window_size(psychoJS.window.size) / (0.35 + window_size(psychoJS.window.size));
    } else {
      instruction_context_fractal_size = window_size(psychoJS.window.size);
      instruction_context_fractal_pos = 0.45 * window_size(psychoJS.window.size) / (0.3 + window_size(psychoJS.window.size));
    }
    // update component parameters for each repeat
    key_resp_context2.keys = undefined;
    key_resp_context2.rt = undefined;
    _key_resp_context2_allKeys = [];
    instruction_background.setWidth(2);
    instruction_background.setHeight(2);
    instruction_background.setFillColor(practice_color_code_2);
    instruction_context_fractal_l.setImage('my_stimuli/Stim_X.jpg');
    instruction_context_fractal_r.setImage('my_stimuli/Stim_Y.jpg');
    instruction_context_fractal_l.setPos([instruction_context_fractal_pos, 0.05]);
    instruction_context_fractal_r.setPos([-instruction_context_fractal_pos, 0.05]);
    instruction_context_fractal_l.setSize([instruction_context_fractal_size, instruction_context_fractal_size]);
    instruction_context_fractal_r.setSize([instruction_context_fractal_size, instruction_context_fractal_size]);
    bgp_instruction_rt.setImage('my_stimuli/practice_tree_2.png');
    bgp_instruction_lt.setImage('my_stimuli/practice_tree_2.png');
    bgp_instruction_rd.setImage('my_stimuli/practice_tree_2.png');
    bgp_instruction_ld.setImage('my_stimuli/practice_tree_2.png');
    bgp_instruction_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
    bgp_instruction_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
    bgp_instruction_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
    bgp_instruction_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
    // keep track of which components have finished
    InstructionsContext2Components = [];
    InstructionsContext2Components.push(instr_context2);
    InstructionsContext2Components.push(key_resp_context2);
    InstructionsContext2Components.push(continue_context2);
    InstructionsContext2Components.push(instruction_context_fractal_l);
    InstructionsContext2Components.push(instruction_context_fractal_r);
    InstructionsContext2Components.push(instruction_background);
    InstructionsContext2Components.push(bgp_instruction_rt);
    InstructionsContext2Components.push(bgp_instruction_lt);
    InstructionsContext2Components.push(bgp_instruction_rd);
    InstructionsContext2Components.push(bgp_instruction_ld);

    for (const thisComponent of InstructionsContext2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions2ContextRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'InstructionsContext2'-------
    // get current time
    t = InstructionsContext2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *instruction_background* updates
    if (t >= 0.0 && instruction_background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_background.tStart = t;  // (not accounting for frame time here)
      instruction_background.frameNStart = frameN;  // exact frame index

      instruction_background.setAutoDraw(true);
    }

    // *bgp_instruction_rt* updates
    if (t >= 0.0 && bgp_instruction_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_instruction_rt.tStart = t;  // (not accounting for frame time here)
      bgp_instruction_rt.frameNStart = frameN;  // exact frame index

      bgp_instruction_rt.setAutoDraw(true);
    }

    // *bgp_instruction_lt* updates
    if (t >= 0.0 && bgp_instruction_lt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_instruction_lt.tStart = t;  // (not accounting for frame time here)
      bgp_instruction_lt.frameNStart = frameN;  // exact frame index

      bgp_instruction_lt.setAutoDraw(true);
    }

    // *bgp_instruction_rd* updates
    if (t >= 0.0 && bgp_instruction_rd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_instruction_rd.tStart = t;  // (not accounting for frame time here)
      bgp_instruction_rd.frameNStart = frameN;  // exact frame index

      bgp_instruction_rd.setAutoDraw(true);
    }

    // *bgp_instruction_ld* updates
    if (t >= 0.0 && bgp_instruction_ld.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_instruction_ld.tStart = t;  // (not accounting for frame time here)
      bgp_instruction_ld.frameNStart = frameN;  // exact frame index

      bgp_instruction_ld.setAutoDraw(true);
    }

    // *instr_context2* updates
    if (t >= 0.0 && instr_context2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_context2.tStart = t;  // (not accounting for frame time here)
      instr_context2.frameNStart = frameN;  // exact frame index

      instr_context2.setAutoDraw(true);
    }


    // *key_resp_context2* updates
    if (t >= 6 && key_resp_context2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_context2.tStart = t;  // (not accounting for frame time here)
      key_resp_context2.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_context2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_context2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_context2.clearEvents(); });
    }

    if (key_resp_context2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_context2.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_context2_allKeys = _key_resp_context2_allKeys.concat(theseKeys);
      if (_key_resp_context2_allKeys.length > 0) {
        key_resp_context2.keys = _key_resp_context2_allKeys[_key_resp_context2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_context2.rt = _key_resp_context2_allKeys[_key_resp_context2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_context2* updates
    if (t >= 6 && continue_context2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_context2.tStart = t;  // (not accounting for frame time here)
      continue_context2.frameNStart = frameN;  // exact frame index

      continue_context2.setAutoDraw(true);
    }


    // *instruction_context_fractal_l* updates
    if (t >= 0.0 && instruction_context_fractal_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_context_fractal_l.tStart = t;  // (not accounting for frame time here)
      instruction_context_fractal_l.frameNStart = frameN;  // exact frame index

      instruction_context_fractal_l.setAutoDraw(true);
    }


    // *instruction_context_fractal_r* updates
    if (t >= 0.0 && instruction_context_fractal_r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_context_fractal_r.tStart = t;  // (not accounting for frame time here)
      instruction_context_fractal_r.frameNStart = frameN;  // exact frame index

      instruction_context_fractal_r.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsContext1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions2ContextRoutineEnd() {
  return async function () {
    //------Ending Routine 'InstructionsContext2'-------
    for (const thisComponent of InstructionsContext2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_context2.keys', key_resp_context2.keys);
    if (typeof key_resp_context2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_context2.rt', key_resp_context1.rt);
      routineTimer.reset();
    }

    key_resp_context2.stop();
    // the Routine "InstructionsContext" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}

var _key_resp_10_allKeys;
var Instructions2Components;
function Instructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'Instructions2'-------
    t = 0;
    Instructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_3.setText('You can choose a shape by clicking on it. Choices must be made quickly - within 2.5 seconds of the trial starting. After clicking on a shape, you will see the outcome of your choice: you will win money or receive nothing.');
    instr_3.setHeight(instruct_height);
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    Instructions2Components = [];
    Instructions2Components.push(instr_3);
    Instructions2Components.push(key_resp_10);
    Instructions2Components.push(continue_13);
    Instructions2Components.push(practice_fractal_l_3);
    Instructions2Components.push(practice_fractal_r_3);

    for (const thisComponent of Instructions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions2'-------
    // get current time
    t = Instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *instr_3* updates
    if (t >= 0.0 && instr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3.tStart = t;  // (not accounting for frame time here)
      instr_3.frameNStart = frameN;  // exact frame index

      instr_3.setAutoDraw(true);
    }


    // *key_resp_10* updates
    if (t >= 6 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_13* updates
    if (t >= 6 && continue_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_13.tStart = t;  // (not accounting for frame time here)
      continue_13.frameNStart = frameN;  // exact frame index

      continue_13.setAutoDraw(true);
    }


    // *practice_fractal_l_3* updates
    if (t >= 0.0 && practice_fractal_l_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_fractal_l_3.tStart = t;  // (not accounting for frame time here)
      practice_fractal_l_3.frameNStart = frameN;  // exact frame index

      practice_fractal_l_3.setAutoDraw(true);
    }


    // *practice_fractal_r_3* updates
    if (t >= 0.0 && practice_fractal_r_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_fractal_r_3.tStart = t;  // (not accounting for frame time here)
      practice_fractal_r_3.frameNStart = frameN;  // exact frame index

      practice_fractal_r_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions2'-------
    for (const thisComponent of Instructions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
      routineTimer.reset();
    }

    key_resp_10.stop();
    // the Routine "Instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_11_allKeys;
var Instructions3Components;
function Instructions3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'Instructions3'-------
    t = 0;
    Instructions3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_6.setText(instr_4_text);
    intro_6.setHeight(instruct_height);
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    practice_left_feed.setText(practice_left_feed_text);
    practice_right_feed.setText(practice_right_feed_text);
    // keep track of which components have finished
    Instructions3Components = [];
    Instructions3Components.push(outline_pl);
    Instructions3Components.push(intro_6);
    Instructions3Components.push(key_resp_11);
    Instructions3Components.push(continue_14);
    Instructions3Components.push(practice_fractal_l_2);
    Instructions3Components.push(practice_fractal_r_2);
    Instructions3Components.push(practice_left_feed);
    Instructions3Components.push(practice_right_feed);

    for (const thisComponent of Instructions3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function Instructions3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions3'-------
    // get current time
    t = Instructions3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *outline_pl* updates
    if (t >= 0.0 && outline_pl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outline_pl.tStart = t;  // (not accounting for frame time here)
      outline_pl.frameNStart = frameN;  // exact frame index

      outline_pl.setAutoDraw(true);
    }


    // *intro_6* updates
    if (t >= 0.0 && intro_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_6.tStart = t;  // (not accounting for frame time here)
      intro_6.frameNStart = frameN;  // exact frame index

      intro_6.setAutoDraw(true);
    }


    // *key_resp_11* updates
    if (t >= 10 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_11.clearEvents(); });
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_14* updates
    if (t >= 10 && continue_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_14.tStart = t;  // (not accounting for frame time here)
      continue_14.frameNStart = frameN;  // exact frame index

      continue_14.setAutoDraw(true);
    }


    // *practice_fractal_l_2* updates
    if (t >= 0.0 && practice_fractal_l_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_fractal_l_2.tStart = t;  // (not accounting for frame time here)
      practice_fractal_l_2.frameNStart = frameN;  // exact frame index

      practice_fractal_l_2.setAutoDraw(true);
    }


    // *practice_fractal_r_2* updates
    if (t >= 0.0 && practice_fractal_r_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_fractal_r_2.tStart = t;  // (not accounting for frame time here)
      practice_fractal_r_2.frameNStart = frameN;  // exact frame index

      practice_fractal_r_2.setAutoDraw(true);
    }


    // *practice_left_feed* updates
    if (t >= 0.0 && practice_left_feed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_left_feed.tStart = t;  // (not accounting for frame time here)
      practice_left_feed.frameNStart = frameN;  // exact frame index

      practice_left_feed.setAutoDraw(true);
    }

    frameRemains = 0.0 + 35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practice_left_feed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_left_feed.setAutoDraw(false);
    }

    // *practice_right_feed* updates
    if (t >= 0.0 && practice_right_feed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_right_feed.tStart = t;  // (not accounting for frame time here)
      practice_right_feed.frameNStart = frameN;  // exact frame index

      practice_right_feed.setAutoDraw(true);
    }

    frameRemains = 0.0 + 35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practice_right_feed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_right_feed.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions3'-------
    for (const thisComponent of Instructions3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
      routineTimer.reset();
    }

    key_resp_11.stop();
    // the Routine "Instructions3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_12_allKeys;
var Instructions4Components;
function Instructions4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'Instructions4'-------
    t = 0;
    Instructions4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_5.setHeight(instruct_height);
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // keep track of which components have finished
    Instructions4Components = [];
    Instructions4Components.push(intro_5);
    Instructions4Components.push(key_resp_12);
    Instructions4Components.push(continue_15);

    for (const thisComponent of Instructions4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions4'-------
    // get current time
    t = Instructions4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *intro_5* updates
    if (t >= 0.0 && intro_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_5.tStart = t;  // (not accounting for frame time here)
      intro_5.frameNStart = frameN;  // exact frame index

      intro_5.setAutoDraw(true);
    }


    // *key_resp_12* updates
    if (t >= 5 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_12.clearEvents(); });
    }

    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_15* updates
    if (t >= 5 && continue_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_15.tStart = t;  // (not accounting for frame time here)
      continue_15.frameNStart = frameN;  // exact frame index

      continue_15.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions4'-------
    for (const thisComponent of Instructions4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
      routineTimer.reset();
    }

    key_resp_12.stop();
    // the Routine "Instructions4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_37_allKeys;
var Instructions5Components;
function Instructions5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'Instructions5'-------
    t = 0;
    Instructions5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    above_cross_text.setHeight(instruct_height);
    key_resp_37.keys = undefined;
    key_resp_37.rt = undefined;
    _key_resp_37_allKeys = [];
    // keep track of which components have finished
    Instructions5Components = [];
    Instructions5Components.push(above_cross_text);
    Instructions5Components.push(key_resp_37);
    Instructions5Components.push(continue_41);
    Instructions5Components.push(below_cross_text);
    Instructions5Components.push(fixation);

    for (const thisComponent of Instructions5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions5'-------
    // get current time
    t = Instructions5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *above_cross_text* updates
    if (t >= 0.0 && above_cross_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      above_cross_text.tStart = t;  // (not accounting for frame time here)
      above_cross_text.frameNStart = frameN;  // exact frame index

      above_cross_text.setAutoDraw(true);
    }


    // *key_resp_37* updates
    if (t >= 4 && key_resp_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_37.tStart = t;  // (not accounting for frame time here)
      key_resp_37.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_37.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_37.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_37.clearEvents(); });
    }

    if (key_resp_37.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_37.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_37_allKeys = _key_resp_37_allKeys.concat(theseKeys);
      if (_key_resp_37_allKeys.length > 0) {
        key_resp_37.keys = _key_resp_37_allKeys[_key_resp_37_allKeys.length - 1].name;  // just the last key pressed
        key_resp_37.rt = _key_resp_37_allKeys[_key_resp_37_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_41* updates
    if (t >= 4 && continue_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_41.tStart = t;  // (not accounting for frame time here)
      continue_41.frameNStart = frameN;  // exact frame index

      continue_41.setAutoDraw(true);
    }


    // *below_cross_text* updates
    if (t >= 0.0 && below_cross_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      below_cross_text.tStart = t;  // (not accounting for frame time here)
      below_cross_text.frameNStart = frameN;  // exact frame index

      below_cross_text.setAutoDraw(true);
    }


    // *fixation* updates
    if (t >= 0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index

      fixation.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions5RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions5'-------
    for (const thisComponent of Instructions5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_37.keys', key_resp_37.keys);
    if (typeof key_resp_37.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_37.rt', key_resp_37.rt);
      routineTimer.reset();
    }

    key_resp_37.stop();
    // the Routine "Instructions5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_13_allKeys;
var Instructions6Components;
function Instructions6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'Instructions6'-------
    t = 0;
    Instructions6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_7.setHeight(instruct_height);
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    Instructions6Components = [];
    Instructions6Components.push(intro_7);
    Instructions6Components.push(key_resp_13);
    Instructions6Components.push(continue_16);

    for (const thisComponent of Instructions6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions6RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions6'-------
    // get current time
    t = Instructions6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *intro_7* updates
    if (t >= 0.0 && intro_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_7.tStart = t;  // (not accounting for frame time here)
      intro_7.frameNStart = frameN;  // exact frame index

      intro_7.setAutoDraw(true);
    }


    // *key_resp_13* updates
    if (t >= 7 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_13.clearEvents(); });
    }

    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_16* updates
    if (t >= 7 && continue_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_16.tStart = t;  // (not accounting for frame time here)
      continue_16.frameNStart = frameN;  // exact frame index

      continue_16.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions6RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions6'-------
    for (const thisComponent of Instructions6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
      routineTimer.reset();
    }

    key_resp_13.stop();
    // the Routine "Instructions6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_40_allKeys;
var Instructions7Components;
function Instructions7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'Instructions7'-------
    t = 0;
    Instructions7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_16.setHeight(instruct_height);
    key_resp_40.keys = undefined;
    key_resp_40.rt = undefined;
    _key_resp_40_allKeys = [];
    // keep track of which components have finished
    Instructions7Components = [];
    Instructions7Components.push(intro_16);
    Instructions7Components.push(key_resp_40);
    Instructions7Components.push(continue_44);

    for (const thisComponent of Instructions7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions7RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions7'-------
    // get current time
    t = Instructions7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *intro_16* updates
    if (t >= 0.0 && intro_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_16.tStart = t;  // (not accounting for frame time here)
      intro_16.frameNStart = frameN;  // exact frame index

      intro_16.setAutoDraw(true);
    }


    // *key_resp_40* updates
    if (t >= 5 && key_resp_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_40.tStart = t;  // (not accounting for frame time here)
      key_resp_40.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_40.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_40.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_40.clearEvents(); });
    }

    if (key_resp_40.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_40.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_40_allKeys = _key_resp_40_allKeys.concat(theseKeys);
      if (_key_resp_40_allKeys.length > 0) {
        key_resp_40.keys = _key_resp_40_allKeys[_key_resp_40_allKeys.length - 1].name;  // just the last key pressed
        key_resp_40.rt = _key_resp_40_allKeys[_key_resp_40_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_44* updates
    if (t >= 5 && continue_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_44.tStart = t;  // (not accounting for frame time here)
      continue_44.frameNStart = frameN;  // exact frame index

      continue_44.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions7RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions7'-------
    for (const thisComponent of Instructions7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_40.keys', key_resp_40.keys);
    if (typeof key_resp_40.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_40.rt', key_resp_40.rt);
      routineTimer.reset();
    }

    key_resp_40.stop();
    // the Routine "Instructions7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_15_allKeys;
var Instructions8Components;
function Instructions8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'Instructions8'-------
    t = 0;
    Instructions8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_9.setHeight(instruct_height);
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    Instructions8Components = [];
    Instructions8Components.push(intro_9);
    Instructions8Components.push(key_resp_15);
    Instructions8Components.push(continue_18);

    for (const thisComponent of Instructions8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions8RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions8'-------
    // get current time
    t = Instructions8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *intro_9* updates
    if (t >= 0.0 && intro_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_9.tStart = t;  // (not accounting for frame time here)
      intro_9.frameNStart = frameN;  // exact frame index

      intro_9.setAutoDraw(true);
    }


    // *key_resp_15* updates
    if (t >= 4 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_15.clearEvents(); });
    }

    if (key_resp_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_15.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
      if (_key_resp_15_allKeys.length > 0) {
        key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_18* updates
    if (t >= 4 && continue_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_18.tStart = t;  // (not accounting for frame time here)
      continue_18.frameNStart = frameN;  // exact frame index

      continue_18.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions8RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions8'-------
    for (const thisComponent of Instructions8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_15.keys', key_resp_15.keys);
    if (typeof key_resp_15.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_15.rt', key_resp_15.rt);
      routineTimer.reset();
    }

    key_resp_15.stop();
    // the Routine "Instructions8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var prac_trials_makeups_noprobe;
var currentLoop;
function prac_trials_makeups_noprobeLoopBegin(prac_trials_makeups_noprobeLoopScheduler, snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    prac_trials_makeups_noprobe = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'prac_trials_makeups_noprobe'
    });
    psychoJS.experiment.addLoop(prac_trials_makeups_noprobe); // add the loop to the experiment
    currentLoop = prac_trials_makeups_noprobe;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisPrac_trials_makeups_noprobe of prac_trials_makeups_noprobe) {
      const snapshot = prac_trials_makeups_noprobe.getSnapshot();
      prac_trials_makeups_noprobeLoopScheduler.add(importConditions(snapshot));
      prac_trials_makeups_noprobeLoopScheduler.add(initialize_trials_to_run_prac1RoutineBegin(snapshot));
      prac_trials_makeups_noprobeLoopScheduler.add(initialize_trials_to_run_prac1RoutineEachFrame());
      prac_trials_makeups_noprobeLoopScheduler.add(initialize_trials_to_run_prac1RoutineEnd());
      const practice_trials_noprobeLoopScheduler = new Scheduler(psychoJS);
      prac_trials_makeups_noprobeLoopScheduler.add(practice_trials_noprobeLoopBegin(practice_trials_noprobeLoopScheduler, snapshot));
      prac_trials_makeups_noprobeLoopScheduler.add(practice_trials_noprobeLoopScheduler);
      prac_trials_makeups_noprobeLoopScheduler.add(practice_trials_noprobeLoopEnd);
      prac_trials_makeups_noprobeLoopScheduler.add(endLoopIteration(prac_trials_makeups_noprobeLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


var practice_trials_noprobe;
function practice_trials_noprobeLoopBegin(practice_trials_noprobeLoopScheduler, snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    practice_trials_noprobe = new TrialHandler({
      psychoJS: psychoJS,
      nReps: pt_noprobe_nreps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_trials_noprobe'
    });
    psychoJS.experiment.addLoop(practice_trials_noprobe); // add the loop to the experiment
    currentLoop = practice_trials_noprobe;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisPractice_trials_noprobe of practice_trials_noprobe) {
      const snapshot = practice_trials_noprobe.getSnapshot();
      practice_trials_noprobeLoopScheduler.add(importConditions(snapshot));
      practice_trials_noprobeLoopScheduler.add(decision_pracRoutineBegin(snapshot));
      practice_trials_noprobeLoopScheduler.add(decision_pracRoutineEachFrame());
      practice_trials_noprobeLoopScheduler.add(decision_pracRoutineEnd());
      const remainingtrial_prac_noprobeLoopScheduler = new Scheduler(psychoJS);
      practice_trials_noprobeLoopScheduler.add(remainingtrial_prac_noprobeLoopBegin(remainingtrial_prac_noprobeLoopScheduler, snapshot));
      practice_trials_noprobeLoopScheduler.add(remainingtrial_prac_noprobeLoopScheduler);
      practice_trials_noprobeLoopScheduler.add(remainingtrial_prac_noprobeLoopEnd);
      practice_trials_noprobeLoopScheduler.add(slow_dec_messageRoutineBegin(snapshot));
      practice_trials_noprobeLoopScheduler.add(slow_dec_messageRoutineEachFrame());
      practice_trials_noprobeLoopScheduler.add(slow_dec_messageRoutineEnd());
      practice_trials_noprobeLoopScheduler.add(ITI_2RoutineBegin(snapshot));
      practice_trials_noprobeLoopScheduler.add(ITI_2RoutineEachFrame());
      practice_trials_noprobeLoopScheduler.add(ITI_2RoutineEnd());
      practice_trials_noprobeLoopScheduler.add(endLoopIteration(practice_trials_noprobeLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


var remainingtrial_prac_noprobe;
function remainingtrial_prac_noprobeLoopBegin(remainingtrial_prac_noprobeLoopScheduler, snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    remainingtrial_prac_noprobe = new TrialHandler({
      psychoJS: psychoJS,
      nReps: complete_trial, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'remainingtrial_prac_noprobe'
    });
    psychoJS.experiment.addLoop(remainingtrial_prac_noprobe); // add the loop to the experiment
    currentLoop = remainingtrial_prac_noprobe;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisRemainingtrial_prac_noprobe of remainingtrial_prac_noprobe) {
      const snapshot = remainingtrial_prac_noprobe.getSnapshot();
      remainingtrial_prac_noprobeLoopScheduler.add(importConditions(snapshot));
      remainingtrial_prac_noprobeLoopScheduler.add(selected_pracRoutineBegin(snapshot));
      remainingtrial_prac_noprobeLoopScheduler.add(selected_pracRoutineEachFrame());
      remainingtrial_prac_noprobeLoopScheduler.add(selected_pracRoutineEnd());
      remainingtrial_prac_noprobeLoopScheduler.add(feedback_pracRoutineBegin(snapshot));
      remainingtrial_prac_noprobeLoopScheduler.add(feedback_pracRoutineEachFrame());
      remainingtrial_prac_noprobeLoopScheduler.add(feedback_pracRoutineEnd());
      remainingtrial_prac_noprobeLoopScheduler.add(endLoopIteration(remainingtrial_prac_noprobeLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


async function remainingtrial_prac_noprobeLoopEnd() {
  psychoJS.experiment.removeLoop(remainingtrial_prac_noprobe);

  return Scheduler.Event.NEXT;
}


async function practice_trials_noprobeLoopEnd() {
  psychoJS.experiment.removeLoop(practice_trials_noprobe);

  return Scheduler.Event.NEXT;
}


async function prac_trials_makeups_noprobeLoopEnd() {
  psychoJS.experiment.removeLoop(prac_trials_makeups_noprobe);

  return Scheduler.Event.NEXT;
}


var practice_qs;
function practice_qsLoopBegin(practice_qsLoopScheduler, snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    practice_qs = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond_files/practice_questions_dec.xlsx',
      seed: undefined, name: 'practice_qs'
    });
    psychoJS.experiment.addLoop(practice_qs); // add the loop to the experiment
    currentLoop = practice_qs;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisPractice_q of practice_qs) {
      const snapshot = practice_qs.getSnapshot();
      practice_qsLoopScheduler.add(importConditions(snapshot));
      practice_qsLoopScheduler.add(initialize_qnrepsRoutineBegin(snapshot));
      practice_qsLoopScheduler.add(initialize_qnrepsRoutineEachFrame());
      practice_qsLoopScheduler.add(initialize_qnrepsRoutineEnd());
      const for_rerunning_qs_decLoopScheduler = new Scheduler(psychoJS);
      practice_qsLoopScheduler.add(for_rerunning_qs_decLoopBegin(for_rerunning_qs_decLoopScheduler, snapshot));
      practice_qsLoopScheduler.add(for_rerunning_qs_decLoopScheduler);
      practice_qsLoopScheduler.add(for_rerunning_qs_decLoopEnd);
      practice_qsLoopScheduler.add(endLoopIteration(practice_qsLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


var for_rerunning_qs_dec;
function for_rerunning_qs_decLoopBegin(for_rerunning_qs_decLoopScheduler, snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    for_rerunning_qs_dec = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'for_rerunning_qs_dec'
    });
    psychoJS.experiment.addLoop(for_rerunning_qs_dec); // add the loop to the experiment
    currentLoop = for_rerunning_qs_dec;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisFor_rerunning_qs_dec of for_rerunning_qs_dec) {
      const snapshot = for_rerunning_qs_dec.getSnapshot();
      for_rerunning_qs_decLoopScheduler.add(importConditions(snapshot));
      const run_q_decLoopScheduler = new Scheduler(psychoJS);
      for_rerunning_qs_decLoopScheduler.add(run_q_decLoopBegin(run_q_decLoopScheduler, snapshot));
      for_rerunning_qs_decLoopScheduler.add(run_q_decLoopScheduler);
      for_rerunning_qs_decLoopScheduler.add(run_q_decLoopEnd);
      for_rerunning_qs_decLoopScheduler.add(endLoopIteration(for_rerunning_qs_decLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


var run_q_dec;
function run_q_decLoopBegin(run_q_decLoopScheduler, snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    run_q_dec = new TrialHandler({
      psychoJS: psychoJS,
      nReps: qnreps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'run_q_dec'
    });
    psychoJS.experiment.addLoop(run_q_dec); // add the loop to the experiment
    currentLoop = run_q_dec;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisRun_q_dec of run_q_dec) {
      const snapshot = run_q_dec.getSnapshot();
      run_q_decLoopScheduler.add(importConditions(snapshot));
      run_q_decLoopScheduler.add(practice_question_2RoutineBegin(snapshot));
      run_q_decLoopScheduler.add(practice_question_2RoutineEachFrame());
      run_q_decLoopScheduler.add(practice_question_2RoutineEnd());
      run_q_decLoopScheduler.add(wrong_answerRoutineBegin(snapshot));
      run_q_decLoopScheduler.add(wrong_answerRoutineEachFrame());
      run_q_decLoopScheduler.add(wrong_answerRoutineEnd());
      run_q_decLoopScheduler.add(correct_answerRoutineBegin(snapshot));
      run_q_decLoopScheduler.add(correct_answerRoutineEachFrame());
      run_q_decLoopScheduler.add(correct_answerRoutineEnd());
      run_q_decLoopScheduler.add(endLoopIteration(run_q_decLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


async function run_q_decLoopEnd() {
  psychoJS.experiment.removeLoop(run_q_dec);

  return Scheduler.Event.NEXT;
}


async function for_rerunning_qs_decLoopEnd() {
  psychoJS.experiment.removeLoop(for_rerunning_qs_dec);

  return Scheduler.Event.NEXT;
}


async function practice_qsLoopEnd() {
  psychoJS.experiment.removeLoop(practice_qs);

  return Scheduler.Event.NEXT;
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      const snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(block_primer_1RoutineBegin(snapshot));
      blocksLoopScheduler.add(block_primer_1RoutineEachFrame());
      blocksLoopScheduler.add(block_primer_1RoutineEnd());
      blocksLoopScheduler.add(block_primer_2RoutineBegin(snapshot));
      blocksLoopScheduler.add(block_primer_2RoutineEachFrame());
      blocksLoopScheduler.add(block_primer_2RoutineEnd());
      blocksLoopScheduler.add(initialize_trials_to_runRoutineBegin(snapshot));
      blocksLoopScheduler.add(initialize_trials_to_runRoutineEachFrame());
      blocksLoopScheduler.add(initialize_trials_to_runRoutineEnd());
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(pauseRoutineBegin(snapshot));
      blocksLoopScheduler.add(pauseRoutineEachFrame());
      blocksLoopScheduler.add(pauseRoutineEnd());
      blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


var trials;
var trial_repeat;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function () {
    if (blocks_run === 0) {
      trial_repeat = learning_trial_num;
    } else {
      trial_repeat = transfer_trial_num;
    }
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trial_repeat, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      const repeat_if_missedLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(repeat_if_missedLoopBegin(repeat_if_missedLoopScheduler, snapshot));
      trialsLoopScheduler.add(repeat_if_missedLoopScheduler);
      trialsLoopScheduler.add(repeat_if_missedLoopEnd);
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


var repeat_if_missed;
function repeat_if_missedLoopBegin(repeat_if_missedLoopScheduler, snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    repeat_if_missed = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'repeat_if_missed'
    });
    psychoJS.experiment.addLoop(repeat_if_missed); // add the loop to the experiment
    currentLoop = repeat_if_missed;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisRepeat_if_missed of repeat_if_missed) {
      const snapshot = repeat_if_missed.getSnapshot();
      repeat_if_missedLoopScheduler.add(importConditions(snapshot));
      repeat_if_missedLoopScheduler.add(decisionRoutineBegin(snapshot));
      repeat_if_missedLoopScheduler.add(decisionRoutineEachFrame());
      repeat_if_missedLoopScheduler.add(decisionRoutineEnd());
      const remaining_trialLoopScheduler = new Scheduler(psychoJS);
      repeat_if_missedLoopScheduler.add(remaining_trialLoopBegin(remaining_trialLoopScheduler, snapshot));
      repeat_if_missedLoopScheduler.add(remaining_trialLoopScheduler);
      repeat_if_missedLoopScheduler.add(remaining_trialLoopEnd);
      repeat_if_missedLoopScheduler.add(slow_dec_messageRoutineBegin(snapshot));
      repeat_if_missedLoopScheduler.add(slow_dec_messageRoutineEachFrame());
      repeat_if_missedLoopScheduler.add(slow_dec_messageRoutineEnd());
      repeat_if_missedLoopScheduler.add(ITI_2RoutineBegin(snapshot));
      repeat_if_missedLoopScheduler.add(ITI_2RoutineEachFrame());
      repeat_if_missedLoopScheduler.add(ITI_2RoutineEnd());
      repeat_if_missedLoopScheduler.add(endLoopIteration(repeat_if_missedLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


var remaining_trial;
function remaining_trialLoopBegin(remaining_trialLoopScheduler, snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    remaining_trial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: complete_trial, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'remaining_trial'
    });
    psychoJS.experiment.addLoop(remaining_trial); // add the loop to the experiment
    currentLoop = remaining_trial;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisRemaining_trial of remaining_trial) {
      const snapshot = remaining_trial.getSnapshot();
      remaining_trialLoopScheduler.add(importConditions(snapshot));
      remaining_trialLoopScheduler.add(selectedRoutineBegin(snapshot));
      remaining_trialLoopScheduler.add(selectedRoutineEachFrame());
      remaining_trialLoopScheduler.add(selectedRoutineEnd());
      remaining_trialLoopScheduler.add(feedbackRoutineBegin(snapshot));
      remaining_trialLoopScheduler.add(feedbackRoutineEachFrame());
      remaining_trialLoopScheduler.add(feedbackRoutineEnd());
      remaining_trialLoopScheduler.add(endLoopIteration(remaining_trialLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


async function remaining_trialLoopEnd() {
  psychoJS.experiment.removeLoop(remaining_trial);

  return Scheduler.Event.NEXT;
}


async function repeat_if_missedLoopEnd() {
  psychoJS.experiment.removeLoop(repeat_if_missed);

  return Scheduler.Event.NEXT;
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var pt_noprobe_nreps;
var initialize_trials_to_run_prac1Components;
function initialize_trials_to_run_prac1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'initialize_trials_to_run_prac1'-------
    t = 0;
    initialize_trials_to_run_prac1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    prac_noprobe_blockreps = (prac_noprobe_blockreps + 1);
    if ((prac_noprobe_blockreps === 1)) {
      pt_noprobe_nreps = 7;
    } else {
      pt_noprobe_nreps = misses;
      misses = 0;
    }

    // keep track of which components have finished
    initialize_trials_to_run_prac1Components = [];

    for (const thisComponent of initialize_trials_to_run_prac1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function initialize_trials_to_run_prac1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'initialize_trials_to_run_prac1'-------
    // get current time
    t = initialize_trials_to_run_prac1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of initialize_trials_to_run_prac1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initialize_trials_to_run_prac1RoutineEnd() {
  return async function () {
    //------Ending Routine 'initialize_trials_to_run_prac1'-------
    for (const thisComponent of initialize_trials_to_run_prac1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "initialize_trials_to_run_prac1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var fa_click;
var fb_click;
var sdm;
var complete_trial;
var r_fractal_position;
var gotValidClick;
var decision_pracComponents;
function decision_pracRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'decision_prac'-------
    t = 0;
    decision_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    fa_click = 0;
    fb_click = 0;
    sdm = false;
    complete_trial = 1;


    r_fractal_position = Math.random();;
    if ((r_fractal_position > 0.5)) {
      x_fa = (- 0.35);
      y_fa = .125;
      x_fb = 0.35;
      y_fb = .125;
    } else {
      x_fa = 0.35;
      x_fb = (- 0.35);
      y_fa = .125;
      y_fb = .125;
    }
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    fractal_a_dec_pl.setPos([x_fa, y_fa]);
    fractal_a_dec_pl.setImage('my_stimuli/Stim_5.jpg');
    fractal_b_dec_pr.setPos([x_fb, y_fb]);
    fractal_b_dec_pr.setImage('my_stimuli/Stim_6.jpg');
    // set context
    background_color_practice.setWidth(2);
    background_color_practice.setHeight(2);
    background_color_practice.setFillColor([0.84706, 0.52941, 0.00000]);
    bgp_practice_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
    bgp_practice_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
    bgp_practice_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
    bgp_practice_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
    // keep track of which components have finished
    decision_pracComponents = [];
    decision_pracComponents.push(mouse);
    decision_pracComponents.push(fractal_a_dec_pl);
    decision_pracComponents.push(fractal_b_dec_pr);
    decision_pracComponents.push(choose_text_2);
    decision_pracComponents.push(background_color_practice);
    decision_pracComponents.push(bgp_practice_rt);
    decision_pracComponents.push(bgp_practice_lt);
    decision_pracComponents.push(bgp_practice_rd);
    decision_pracComponents.push(bgp_practice_ld);
    for (const thisComponent of decision_pracComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function decision_pracRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'decision_prac'-------
    // get current time
    t = decision_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (fractal_a_dec_pl.contains(mouse) && mouse.getPressed()[0] === 1) {
      psychoJS.experiment.addData("mouse.rt", decision_pracClock.getTime());
      psychoJS.experiment.addData("dec_prac_noprobe_choicetime", globalClock.getTime());
      fa_click = 1;
    } else {
      if (fractal_b_dec_pr.contains(mouse) && mouse.getPressed()[0] === 1) {
        psychoJS.experiment.addData("mouse.rt", decision_pracClock.getTime());
        psychoJS.experiment.addData("dec_prac_noprobe_choicetime", globalClock.getTime());
        fb_click = 1;
      }
    }
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index

      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse.status = PsychoJS.Status.FINISHED;
    }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every((e, i, ) => (e == prevButtonState[i]))) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce((e, acc) => (e + acc)) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [fractal_a_dec_pl, fractal_b_dec_pr]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }

    // *background_color_practice* updates
    if (t >= 0.0 && background_color_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_color_practice.tStart = t;  // (not accounting for frame time here)
      background_color_practice.frameNStart = frameN;  // exact frame index

      background_color_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_color_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_color_practice.setAutoDraw(false);
    }
    // *bgp_practice_rt* updates
    if (t >= 0.0 && bgp_practice_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_practice_rt.tStart = t;  // (not accounting for frame time here)
      bgp_practice_rt.frameNStart = frameN;  // exact frame index

      bgp_practice_rt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_practice_rt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_practice_rt.setAutoDraw(false);
    }

    // *bgp_practice_lt* updates
    if (t >= 0.0 && bgp_practice_lt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_practice_lt.tStart = t;  // (not accounting for frame time here)
      bgp_practice_lt.frameNStart = frameN;  // exact frame index

      bgp_practice_lt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_practice_lt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_practice_lt.setAutoDraw(false);
    }

    // *bgp_practice_rd* updates
    if (t >= 0.0 && bgp_practice_rd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_practice_rd.tStart = t;  // (not accounting for frame time here)
      bgp_practice_rd.frameNStart = frameN;  // exact frame index

      bgp_practice_rd.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_practice_rd.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_practice_rd.setAutoDraw(false);
    }

    // *bgp_practice_ld* updates
    if (t >= 0.0 && bgp_practice_ld.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_practice_ld.tStart = t;  // (not accounting for frame time here)
      bgp_practice_ld.frameNStart = frameN;  // exact frame index

      bgp_practice_ld.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_practice_ld.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_practice_ld.setAutoDraw(false);
    }

    // *fractal_a_dec_pl* updates
    if (t >= 0.0 && fractal_a_dec_pl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_a_dec_pl.tStart = t;  // (not accounting for frame time here)
      fractal_a_dec_pl.frameNStart = frameN;  // exact frame index

      fractal_a_dec_pl.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fractal_a_dec_pl.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fractal_a_dec_pl.setAutoDraw(false);
    }

    // *fractal_b_dec_pr* updates
    if (t >= 0.0 && fractal_b_dec_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_b_dec_pr.tStart = t;  // (not accounting for frame time here)
      fractal_b_dec_pr.frameNStart = frameN;  // exact frame index

      fractal_b_dec_pr.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fractal_b_dec_pr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fractal_b_dec_pr.setAutoDraw(false);
    }

    // *choose_text_2* updates
    if (t >= 0.0 && choose_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choose_text_2.tStart = t;  // (not accounting for frame time here)
      choose_text_2.frameNStart = frameN;  // exact frame index

      choose_text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (choose_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      choose_text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of decision_pracComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function decision_pracRoutineEnd() {
  return async function () {
    //------Ending Routine 'decision_prac'-------
    for (const thisComponent of decision_pracComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (((fa_click === 0) && (fb_click === 0))) {
      sdm = true;
      complete_trial = 0;
      misses = (misses + 1);
    } else {
      r_train = 0.1;
      r_outcome_a = Math.random();
      if ((r_outcome_a <= 0.8)) {
        outcome_a_train = r_train;
      } else {
        if ((r_outcome_a >= 0.8)) {
          outcome_a_train = 0;
        }
      }
      r_outcome_b = Math.random();
      if ((r_outcome_b <= 0.2)) {
        outcome_b_train = r_train;
      } else {
        if ((r_outcome_b >= 0.2)) {
          outcome_b_train = 0;
        }
      }
      if (fa_click) {
        chosen_outcome_train = outcome_a_train;
      } else {
        if (fb_click) {
          chosen_outcome_train = outcome_b_train;
        }
      }
      psychoJS.experiment.addData("chosen_outcome_train", chosen_outcome);
      psychoJS.experiment.addData("outcome_a_train", outcome_a_train);
      psychoJS.experiment.addData("outcome_b_train", outcome_b_train);
    }

    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    if (mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0]);
    }
    return Scheduler.Event.NEXT;
  };
}


var selected_pracComponents;
function selected_pracRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'selected_prac'-------
    t = 0;
    selected_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    outline_fa_4.setOpacity(fa_click);
    outline_fa_4.setPos([x_fa, y_fa]);
    outline_fb_4.setOpacity(fb_click);
    outline_fb_4.setPos([x_fb, y_fb]);
    fractal_a_slctd_3.setPos([x_fa, y_fa]);
    fractal_a_slctd_3.setImage('my_stimuli/Stim_5.jpg');
    fractal_b_slctd_3.setPos([x_fb, y_fb]);
    fractal_b_slctd_3.setImage('my_stimuli/Stim_6.jpg');
    // set context
    background_color_practice.setWidth(2);
    background_color_practice.setHeight(2);
    background_color_practice.setFillColor([0.84706, 0.52941, 0.00000]);
    bgp_practice_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
    bgp_practice_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
    bgp_practice_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
    bgp_practice_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
    // keep track of which components have finished
    selected_pracComponents = [];
    selected_pracComponents.push(outline_fa_4);
    selected_pracComponents.push(outline_fb_4);
    selected_pracComponents.push(fractal_a_slctd_3);
    selected_pracComponents.push(fractal_b_slctd_3);
    selected_pracComponents.push(background_color_practice);
    selected_pracComponents.push(bgp_practice_rt);
    selected_pracComponents.push(bgp_practice_lt);
    selected_pracComponents.push(bgp_practice_rd);
    selected_pracComponents.push(bgp_practice_ld);

    for (const thisComponent of selected_pracComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function selected_pracRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'selected_prac'-------
    // get current time
    t = selected_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *background_color_practice* updates
    if (t >= 0.0 && background_color_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_color_practice.tStart = t;  // (not accounting for frame time here)
      background_color_practice.frameNStart = frameN;  // exact frame index

      background_color_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_color_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_color_practice.setAutoDraw(false);
    }

    // *bgp_practice_rt* updates
    if (t >= 0.0 && bgp_practice_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_practice_rt.tStart = t;  // (not accounting for frame time here)
      bgp_practice_rt.frameNStart = frameN;  // exact frame index

      bgp_practice_rt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_practice_rt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_practice_rt.setAutoDraw(false);
    }

    // *bgp_practice_lt* updates
    if (t >= 0.0 && bgp_practice_lt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_practice_lt.tStart = t;  // (not accounting for frame time here)
      bgp_practice_lt.frameNStart = frameN;  // exact frame index

      bgp_practice_lt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_practice_lt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_practice_lt.setAutoDraw(false);
    }

    // *bgp_practice_rd* updates
    if (t >= 0.0 && bgp_practice_rd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_practice_rd.tStart = t;  // (not accounting for frame time here)
      bgp_practice_rd.frameNStart = frameN;  // exact frame index

      bgp_practice_rd.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_practice_rd.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_practice_rd.setAutoDraw(false);
    }

    // *bgp_practice_ld* updates
    if (t >= 0.0 && bgp_practice_ld.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_practice_ld.tStart = t;  // (not accounting for frame time here)
      bgp_practice_ld.frameNStart = frameN;  // exact frame index

      bgp_practice_ld.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_practice_ld.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_practice_ld.setAutoDraw(false);
    }

    // *outline_fa_4* updates
    if (t >= 0.0 && outline_fa_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outline_fa_4.tStart = t;  // (not accounting for frame time here)
      outline_fa_4.frameNStart = frameN;  // exact frame index

      outline_fa_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outline_fa_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outline_fa_4.setAutoDraw(false);
    }

    // *outline_fb_4* updates
    if (t >= 0.0 && outline_fb_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outline_fb_4.tStart = t;  // (not accounting for frame time here)
      outline_fb_4.frameNStart = frameN;  // exact frame index

      outline_fb_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outline_fb_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outline_fb_4.setAutoDraw(false);
    }

    // *fractal_a_slctd_3* updates
    if (t >= 0.0 && fractal_a_slctd_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_a_slctd_3.tStart = t;  // (not accounting for frame time here)
      fractal_a_slctd_3.frameNStart = frameN;  // exact frame index

      fractal_a_slctd_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fractal_a_slctd_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fractal_a_slctd_3.setAutoDraw(false);
    }

    // *fractal_b_slctd_3* updates
    if (t >= 0.0 && fractal_b_slctd_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_b_slctd_3.tStart = t;  // (not accounting for frame time here)
      fractal_b_slctd_3.frameNStart = frameN;  // exact frame index

      fractal_b_slctd_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fractal_b_slctd_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fractal_b_slctd_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of selected_pracComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function selected_pracRoutineEnd() {
  return async function () {
    //------Ending Routine 'selected_prac'-------
    for (const thisComponent of selected_pracComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var outcome_txt_a;
var sign_a;
var color_a;
var outcome_a_string;
var outcome_txt_b;
var sign_b;
var color_b;
var outcome_b_string;
var feedback_pracComponents;
function feedback_pracRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'feedback_prac'-------
    t = 0;
    feedback_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((outcome_a_train > 0)) {
      outcome_txt_a = outcome_a_train.toString();
      sign_a = "+";
      color_a = "black";
    } else {
      if ((outcome_a_train === 0)) {
        outcome_txt_a = outcome_a_train.toString();
        sign_a = "";
        color_a = "black";
      } else {
        if ((outcome_a_train < 0)) {
          outcome_txt_a = (- outcome_a_train).toString();
          sign_a = "-";
          color_a = "red";
        }
      }
    }
    outcome_a_string = ((sign_a + outcome_txt_a) + "\u20ac");
    if ((outcome_b_train > 0)) {
      outcome_txt_b = outcome_b_train.toString();
      sign_b = "+";
      color_b = "black";
    } else {
      if ((outcome_b_train === 0)) {
        outcome_txt_b = outcome_b_train.toString();
        sign_b = "";
        color_b = "black";
      } else {
        if ((outcome_b_train < 0)) {
          outcome_txt_b = (- outcome_b_train).toString();
          sign_b = "-";
          color_b = "red";
        }
      }
    }
    outcome_b_string = ((sign_b + outcome_txt_b) + "\u20ac");

    outline_fa_5.setOpacity(fa_click);
    outline_fa_5.setPos([x_fa, y_fa]);
    outline_fb_5.setOpacity(fb_click);
    outline_fb_5.setPos([x_fb, y_fb]);
    fractal_a_fdbk_2.setPos([x_fa, y_fa]);
    fractal_a_fdbk_2.setImage('my_stimuli/Stim_5.jpg');
    fractal_b_fdbk_2.setPos([x_fb, y_fb]);
    fractal_b_fdbk_2.setImage('my_stimuli/Stim_6.jpg');
    outcome_amount_a_2.setColor(new util.Color(color_a));
    outcome_amount_a_2.setPos([x_fa, y_outcome_text]);
    outcome_amount_a_2.setText(outcome_a_string);
    outcome_amount_a_2.setOpacity(fa_click);
    outcome_amount_b_2.setColor(new util.Color(color_b));
    outcome_amount_b_2.setPos([x_fb, y_outcome_text]);
    outcome_amount_b_2.setText(outcome_b_string);
    outcome_amount_b_2.setOpacity(fb_click);
    // set context
    background_color_practice.setWidth(2);
    background_color_practice.setHeight(2);
    background_color_practice.setFillColor([0.84706, 0.52941, 0.00000]);
    bgp_practice_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
    bgp_practice_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
    bgp_practice_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
    bgp_practice_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
    // keep track of which components have finished
    feedback_pracComponents = [];
    feedback_pracComponents.push(outline_fa_5);
    feedback_pracComponents.push(outline_fb_5);
    feedback_pracComponents.push(fractal_a_fdbk_2);
    feedback_pracComponents.push(fractal_b_fdbk_2);
    feedback_pracComponents.push(outcome_amount_a_2);
    feedback_pracComponents.push(outcome_amount_b_2);
    feedback_pracComponents.push(background_color_practice);
    feedback_pracComponents.push(bgp_practice_rt);
    feedback_pracComponents.push(bgp_practice_lt);
    feedback_pracComponents.push(bgp_practice_rd);
    feedback_pracComponents.push(bgp_practice_ld);

    for (const thisComponent of feedback_pracComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback_pracRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_prac'-------
    // get current time
    t = feedback_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *background_color_practice* updates
    if (t >= 0.0 && background_color_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_color_practice.tStart = t;  // (not accounting for frame time here)
      background_color_practice.frameNStart = frameN;  // exact frame index

      background_color_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_color_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_color_practice.setAutoDraw(false);
    }

    // *bgp_practice_rt* updates
    if (t >= 0.0 && bgp_practice_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_practice_rt.tStart = t;  // (not accounting for frame time here)
      bgp_practice_rt.frameNStart = frameN;  // exact frame index

      bgp_practice_rt.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_practice_rt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_practice_rt.setAutoDraw(false);
    }

    // *bgp_practice_lt* updates
    if (t >= 0.0 && bgp_practice_lt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_practice_lt.tStart = t;  // (not accounting for frame time here)
      bgp_practice_lt.frameNStart = frameN;  // exact frame index

      bgp_practice_lt.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_practice_lt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_practice_lt.setAutoDraw(false);
    }

    // *bgp_practice_rd* updates
    if (t >= 0.0 && bgp_practice_rd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_practice_rd.tStart = t;  // (not accounting for frame time here)
      bgp_practice_rd.frameNStart = frameN;  // exact frame index

      bgp_practice_rd.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_practice_rd.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_practice_rd.setAutoDraw(false);
    }

    // *bgp_practice_ld* updates
    if (t >= 0.0 && bgp_practice_ld.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_practice_ld.tStart = t;  // (not accounting for frame time here)
      bgp_practice_ld.frameNStart = frameN;  // exact frame index

      bgp_practice_ld.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_practice_ld.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_practice_ld.setAutoDraw(false);
    }

    // *outline_fa_5* updates
    if (t >= 0.0 && outline_fa_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outline_fa_5.tStart = t;  // (not accounting for frame time here)
      outline_fa_5.frameNStart = frameN;  // exact frame index

      outline_fa_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outline_fa_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outline_fa_5.setAutoDraw(false);
    }

    // *outline_fb_5* updates
    if (t >= 0.0 && outline_fb_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outline_fb_5.tStart = t;  // (not accounting for frame time here)
      outline_fb_5.frameNStart = frameN;  // exact frame index

      outline_fb_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outline_fb_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outline_fb_5.setAutoDraw(false);
    }

    // *fractal_a_fdbk_2* updates
    if (t >= 0.0 && fractal_a_fdbk_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_a_fdbk_2.tStart = t;  // (not accounting for frame time here)
      fractal_a_fdbk_2.frameNStart = frameN;  // exact frame index

      fractal_a_fdbk_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fractal_a_fdbk_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fractal_a_fdbk_2.setAutoDraw(false);
    }

    // *fractal_b_fdbk_2* updates
    if (t >= 0.0 && fractal_b_fdbk_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_b_fdbk_2.tStart = t;  // (not accounting for frame time here)
      fractal_b_fdbk_2.frameNStart = frameN;  // exact frame index

      fractal_b_fdbk_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fractal_b_fdbk_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fractal_b_fdbk_2.setAutoDraw(false);
    }

    // *outcome_amount_a_2* updates
    if (t >= 0.0 && outcome_amount_a_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outcome_amount_a_2.tStart = t;  // (not accounting for frame time here)
      outcome_amount_a_2.frameNStart = frameN;  // exact frame index

      outcome_amount_a_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outcome_amount_a_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outcome_amount_a_2.setAutoDraw(false);
    }

    // *outcome_amount_b_2* updates
    if (t >= 0.0 && outcome_amount_b_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outcome_amount_b_2.tStart = t;  // (not accounting for frame time here)
      outcome_amount_b_2.frameNStart = frameN;  // exact frame index

      outcome_amount_b_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outcome_amount_b_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outcome_amount_b_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback_pracComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_pracRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_prac'-------
    for (const thisComponent of feedback_pracComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    outcome_b_string = "";
    outcome_a_string = "";

    // the Routine "feedback_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var slow_dec_messageComponents;
function slow_dec_messageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'slow_dec_message'-------
    t = 0;
    slow_dec_messageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData("too_slow", sdm);
    continueRoutine = sdm;

    // keep track of which components have finished
    slow_dec_messageComponents = [];
    slow_dec_messageComponents.push(text_5);

    for (const thisComponent of slow_dec_messageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function slow_dec_messageRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'slow_dec_message'-------
    // get current time
    t = slow_dec_messageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index

      text_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of slow_dec_messageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function slow_dec_messageRoutineEnd() {
  return async function () {
    //------Ending Routine 'slow_dec_message'-------
    for (const thisComponent of slow_dec_messageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var ITI_2Components;
function ITI_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'ITI_2'-------
    t = 0;
    ITI_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    outcome_a = 0;
    outcome_b = 0;

    // keep track of which components have finished
    ITI_2Components = [];
    ITI_2Components.push(polygon);

    for (const thisComponent of ITI_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ITI_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ITI_2'-------
    // get current time
    t = ITI_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index

      polygon.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ITI_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITI_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'ITI_2'-------
    for (const thisComponent of ITI_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_27_allKeys;
var pre_dec_qsComponents;
function pre_dec_qsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'pre_dec_qs'-------
    t = 0;
    pre_dec_qsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    hyf_intro_3.setHeight(instruct_height);
    key_resp_27.keys = undefined;
    key_resp_27.rt = undefined;
    _key_resp_27_allKeys = [];
    // keep track of which components have finished
    pre_dec_qsComponents = [];
    pre_dec_qsComponents.push(hyf_intro_3);
    pre_dec_qsComponents.push(key_resp_27);
    pre_dec_qsComponents.push(continue_29);

    for (const thisComponent of pre_dec_qsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pre_dec_qsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pre_dec_qs'-------
    // get current time
    t = pre_dec_qsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *hyf_intro_3* updates
    if (t >= 0.0 && hyf_intro_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hyf_intro_3.tStart = t;  // (not accounting for frame time here)
      hyf_intro_3.frameNStart = frameN;  // exact frame index

      hyf_intro_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (hyf_intro_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      hyf_intro_3.setAutoDraw(false);
    }

    // *key_resp_27* updates
    if (t >= 0.0 && key_resp_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_27.tStart = t;  // (not accounting for frame time here)
      key_resp_27.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_27.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_27.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_27.clearEvents(); });
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_27.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_27.status = PsychoJS.Status.FINISHED;
    }

    if (key_resp_27.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_27.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_27_allKeys = _key_resp_27_allKeys.concat(theseKeys);
      if (_key_resp_27_allKeys.length > 0) {
        key_resp_27.keys = _key_resp_27_allKeys[_key_resp_27_allKeys.length - 1].name;  // just the last key pressed
        key_resp_27.rt = _key_resp_27_allKeys[_key_resp_27_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_29* updates
    if (t >= 0.0 && continue_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_29.tStart = t;  // (not accounting for frame time here)
      continue_29.frameNStart = frameN;  // exact frame index

      continue_29.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (continue_29.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      continue_29.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pre_dec_qsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pre_dec_qsRoutineEnd() {
  return async function () {
    //------Ending Routine 'pre_dec_qs'-------
    for (const thisComponent of pre_dec_qsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_27.keys', key_resp_27.keys);
    if (typeof key_resp_27.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_27.rt', key_resp_27.rt);
      routineTimer.reset();
    }

    key_resp_27.stop();
    return Scheduler.Event.NEXT;
  };
}


var qnreps;
var initialize_qnrepsComponents;
function initialize_qnrepsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'initialize_qnreps'-------
    t = 0;
    initialize_qnrepsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    qnreps = 1;

    // keep track of which components have finished
    initialize_qnrepsComponents = [];

    for (const thisComponent of initialize_qnrepsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function initialize_qnrepsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'initialize_qnreps'-------
    // get current time
    t = initialize_qnrepsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of initialize_qnrepsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initialize_qnrepsRoutineEnd() {
  return async function () {
    //------Ending Routine 'initialize_qnreps'-------
    for (const thisComponent of initialize_qnrepsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "initialize_qnreps" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var correct;
var practice_question_2Components;
function practice_question_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'practice_question_2'-------
    t = 0;
    practice_question_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    poly_false_dec.setPos([(- 0.45), pf_y]);
    poly_true_dec.setPos([(- 0.45), pt_y]);
    Question.setText(question);
    Question.setHeight(instruct_height);
    answer_true.setPos([at_x, at_y]);
    answer_true.setText(answer_true_txt);
    answer_true.setHeight(instruct_height);
    answer_false.setPos([af_x, af_y]);
    answer_false.setText(answer_false_txt);
    answer_false.setHeight(instruct_height);
    // setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received


    correct = 0;
    qnreps = 1;



    // keep track of which components have finished
    practice_question_2Components = [];
    practice_question_2Components.push(poly_false_dec);
    practice_question_2Components.push(poly_true_dec);
    practice_question_2Components.push(Question);
    practice_question_2Components.push(answer_true);
    practice_question_2Components.push(answer_false);
    practice_question_2Components.push(mouse_3);
    practice_question_2Components.push(Click_on_an_answer);

    for (const thisComponent of practice_question_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_question_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_question_2'-------
    // get current time
    t = practice_question_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *poly_false_dec* updates
    if (t >= 0.0 && poly_false_dec.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      poly_false_dec.tStart = t;  // (not accounting for frame time here)
      poly_false_dec.frameNStart = frameN;  // exact frame index

      poly_false_dec.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (poly_false_dec.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      poly_false_dec.setAutoDraw(false);
    }

    // *poly_true_dec* updates
    if (t >= 0.0 && poly_true_dec.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      poly_true_dec.tStart = t;  // (not accounting for frame time here)
      poly_true_dec.frameNStart = frameN;  // exact frame index

      poly_true_dec.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (poly_true_dec.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      poly_true_dec.setAutoDraw(false);
    }

    // *Question* updates
    if (t >= 0.0 && Question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question.tStart = t;  // (not accounting for frame time here)
      Question.frameNStart = frameN;  // exact frame index

      Question.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Question.setAutoDraw(false);
    }

    // *answer_true* updates
    if (t >= 0.0 && answer_true.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_true.tStart = t;  // (not accounting for frame time here)
      answer_true.frameNStart = frameN;  // exact frame index

      answer_true.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (answer_true.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      answer_true.setAutoDraw(false);
    }

    // *answer_false* updates
    if (t >= 0.0 && answer_false.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_false.tStart = t;  // (not accounting for frame time here)
      answer_false.frameNStart = frameN;  // exact frame index

      answer_false.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (answer_false.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      answer_false.setAutoDraw(false);
    }
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index

      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
    }
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_3.status = PsychoJS.Status.FINISHED;
    }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every((e, i, ) => (e == prevButtonState[i]))) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce((e, acc) => (e + acc)) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [poly_true_dec, poly_false_dec]) {
            if (obj.contains(mouse_3)) {
              gotValidClick = true;
              mouse_3.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    if (poly_true_dec.contains(mouse_3) && mouse_3.getPressed()[0] === 1) {
      psychoJS.experiment.addData("mouse_3.rt", practice_question_2Clock.getTime());
      psychoJS.experiment.addData("prac_question_noprobe_choicetime", globalClock.getTime());
      correct = 1;
      qnreps = 0;
    } else {
      if (poly_false_dec.contains(mouse_3) && mouse_3.getPressed()[0] === 1) {
        psychoJS.experiment.addData("mouse_3.rt", practice_question_2Clock.getTime());
        psychoJS.experiment.addData("prac_question_noprobe_choicetime", globalClock.getTime());
        correct = 0;
        qnreps = 1;
      }
    }

    // *Click_on_an_answer* updates
    if (t >= 0.0 && Click_on_an_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Click_on_an_answer.tStart = t;  // (not accounting for frame time here)
      Click_on_an_answer.frameNStart = frameN;  // exact frame index

      Click_on_an_answer.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Click_on_an_answer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Click_on_an_answer.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_question_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_question_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_question_2'-------
    for (const thisComponent of practice_question_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_3.getPos();
    _mouseButtons = mouse_3.getPressed();
    psychoJS.experiment.addData('mouse_3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_3.rightButton', _mouseButtons[2]);
    if (mouse_3.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name[0]);
    }
    return Scheduler.Event.NEXT;
  };
}


var wrong_answerComponents;
function wrong_answerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'wrong_answer'-------
    t = 0;
    wrong_answerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    intro_11.setHeight(instruct_height);
    if (correct) {
      continueRoutine = false;
    }

    // keep track of which components have finished
    wrong_answerComponents = [];
    wrong_answerComponents.push(intro_11);

    for (const thisComponent of wrong_answerComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function wrong_answerRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'wrong_answer'-------
    // get current time
    t = wrong_answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *intro_11* updates
    if (t >= 0.0 && intro_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_11.tStart = t;  // (not accounting for frame time here)
      intro_11.frameNStart = frameN;  // exact frame index

      intro_11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (intro_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      intro_11.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of wrong_answerComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function wrong_answerRoutineEnd() {
  return async function () {
    //------Ending Routine 'wrong_answer'-------
    for (const thisComponent of wrong_answerComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_17_allKeys;
var correct_answerComponents;
function correct_answerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'correct_answer'-------
    t = 0;
    correct_answerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    intro_12.setText(correct_txt);
    intro_12.setHeight(instruct_height);
    if ((correct === 0)) {
      continueRoutine = false;
    }

    key_resp_17.keys = undefined;
    key_resp_17.rt = undefined;
    _key_resp_17_allKeys = [];
    // keep track of which components have finished
    correct_answerComponents = [];
    correct_answerComponents.push(intro_12);
    correct_answerComponents.push(key_resp_17);
    correct_answerComponents.push(continue_20);

    for (const thisComponent of correct_answerComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function correct_answerRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'correct_answer'-------
    // get current time
    t = correct_answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *intro_12* updates
    if (t >= 0.0 && intro_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_12.tStart = t;  // (not accounting for frame time here)
      intro_12.frameNStart = frameN;  // exact frame index

      intro_12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (intro_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      intro_12.setAutoDraw(false);
    }

    // *key_resp_17* updates
    if (t >= 0.0 && key_resp_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_17.tStart = t;  // (not accounting for frame time here)
      key_resp_17.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_17.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_17.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_17.clearEvents(); });
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_17.status = PsychoJS.Status.FINISHED;
    }

    if (key_resp_17.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_17.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_17_allKeys = _key_resp_17_allKeys.concat(theseKeys);
      if (_key_resp_17_allKeys.length > 0) {
        key_resp_17.keys = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].name;  // just the last key pressed
        key_resp_17.rt = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_20* updates
    if (t >= 0.0 && continue_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_20.tStart = t;  // (not accounting for frame time here)
      continue_20.frameNStart = frameN;  // exact frame index

      continue_20.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (continue_20.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      continue_20.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of correct_answerComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function correct_answerRoutineEnd() {
  return async function () {
    //------Ending Routine 'correct_answer'-------
    for (const thisComponent of correct_answerComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_17.keys', key_resp_17.keys);
    if (typeof key_resp_17.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_17.rt', key_resp_17.rt);
      routineTimer.reset();
    }

    key_resp_17.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_16_allKeys;
var Instructions10Components;
function Instructions10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'Instructions10'-------
    t = 0;
    Instructions10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    hyf_intro.setHeight(instruct_height);
    key_resp_16.keys = undefined;
    key_resp_16.rt = undefined;
    _key_resp_16_allKeys = [];
    // keep track of which components have finished
    Instructions10Components = [];
    Instructions10Components.push(hyf_intro);
    Instructions10Components.push(key_resp_16);
    Instructions10Components.push(continue_19);

    for (const thisComponent of Instructions10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions10RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions10'-------
    // get current time
    t = Instructions10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *hyf_intro* updates
    if (t >= 0.0 && hyf_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hyf_intro.tStart = t;  // (not accounting for frame time here)
      hyf_intro.frameNStart = frameN;  // exact frame index

      hyf_intro.setAutoDraw(true);
    }


    // *key_resp_16* updates
    if (t >= 7 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_16.tStart = t;  // (not accounting for frame time here)
      key_resp_16.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_16.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_16.clearEvents(); });
    }

    if (key_resp_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_16.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
      if (_key_resp_16_allKeys.length > 0) {
        key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
        key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_19* updates
    if (t >= 7 && continue_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_19.tStart = t;  // (not accounting for frame time here)
      continue_19.frameNStart = frameN;  // exact frame index

      continue_19.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions10RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions10'-------
    for (const thisComponent of Instructions10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_16.keys', key_resp_16.keys);
    if (typeof key_resp_16.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_16.rt', key_resp_16.rt);
      routineTimer.reset();
    }

    key_resp_16.stop();
    // the Routine "Instructions10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var pre_experiment_itiComponents;
function pre_experiment_itiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'pre_experiment_iti'-------
    t = 0;
    pre_experiment_itiClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    pre_experiment_itiComponents = [];
    pre_experiment_itiComponents.push(text);

    for (const thisComponent of pre_experiment_itiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pre_experiment_itiRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pre_experiment_iti'-------
    // get current time
    t = pre_experiment_itiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index

      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pre_experiment_itiComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pre_experiment_itiRoutineEnd() {
  return async function () {
    //------Ending Routine 'pre_experiment_iti'-------
    for (const thisComponent of pre_experiment_itiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var primer_txt;
var fractal_ta;
var fractal_tb;
var fractal_ma;
var fractal_mb;
var r_frac_pos;
var x_fa_primer;
var x_fb_primer;
var _primer_next_1_allKeys;
var block_primer_1Components;
function block_primer_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'block_primer_1'-------
    t = 0;
    block_primer_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((blocks_run === 0)) {
      primer_txt = "The experiment will now begin. You will make choices between these shapes.";
      fractal_ta = 'pair1_A';
      fractal_tb = 'pair1_B';
      fractal_ma = 'pair1_C';
      fractal_mb = 'pair2_D';
    } else {
      if ((blocks_run === 1)) {
        primer_txt = "The experiment will now continue. You will continue to make choices between these shapes.";
        fractal_ta = 'my_stimuli/Stim_1.jpg';
        fractal_tb = 'my_stimuli/Stim_3.jpg';
        fractal_ma = 'my_stimuli/Stim_2.jpg';
        fractal_mb = 'my_stimuli/Stim_4.jpg';
      }
    }
    r_frac_pos = Math.random();
    if ((r_frac_pos < 0.5)) {
      x_fa = (- 0.35);
      x_fa_primer = (- 0.15);
      x_fb = 0.35;
      x_fb_primer = 0.15;
    } else {
      x_fa = 0.35;
      x_fa_primer = 0.15;
      x_fb = (- 0.35);
      x_fb_primer = (- 0.15);
    }

    psychoJS.experiment.addData("TMPfractal_ta", fractal_ta);
    psychoJS.experiment.addData("TMPfractal_tb", fractal_tb);
    psychoJS.experiment.addData("TMPfractal_ma", fractal_ma);
    psychoJS.experiment.addData("TMPfractal_mb", fractal_mb);
    primer_text.setText(primer_txt);
    fractal_top_left.setPos([x_fa_primer, 0.15]);
    fractal_top_left.setImage(fractal_ta);
    primer_next_1.keys = undefined;
    primer_next_1.rt = undefined;
    _primer_next_1_allKeys = [];
    fractal_top_right.setPos([x_fb_primer, 0.15]);
    fractal_top_right.setImage(fractal_tb);
    fractal_middle_left.setPos([x_fa_primer, (- 0.15)]);
    fractal_middle_left.setImage(fractal_ma);
    fractal_middle_right.setPos([x_fb_primer, (- 0.15)]);
    fractal_middle_right.setImage(fractal_mb);
    // keep track of which components have finished
    block_primer_1Components = [];
    block_primer_1Components.push(primer_text);
    block_primer_1Components.push(fractal_top_left);
    block_primer_1Components.push(primer_next_1);
    block_primer_1Components.push(continue_3);
    block_primer_1Components.push(fractal_top_right);
    block_primer_1Components.push(fractal_middle_left);
    block_primer_1Components.push(fractal_middle_right);

    for (const thisComponent of block_primer_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_primer_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'block_primer_1'-------
    // get current time
    t = block_primer_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *primer_text* updates
    if (t >= 0.0 && primer_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      primer_text.tStart = t;  // (not accounting for frame time here)
      primer_text.frameNStart = frameN;  // exact frame index

      primer_text.setAutoDraw(true);
    }


    // *fractal_top_left* updates
    if (t >= 0.0 && fractal_top_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_top_left.tStart = t;  // (not accounting for frame time here)
      fractal_top_left.frameNStart = frameN;  // exact frame index

      fractal_top_left.setAutoDraw(true);
    }


    // *primer_next_1* updates
    if (t >= 2 && primer_next_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      primer_next_1.tStart = t;  // (not accounting for frame time here)
      primer_next_1.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { primer_next_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { primer_next_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { primer_next_1.clearEvents(); });
    }

    if (primer_next_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = primer_next_1.getKeys({ keyList: ['right'], waitRelease: false });
      _primer_next_1_allKeys = _primer_next_1_allKeys.concat(theseKeys);
      if (_primer_next_1_allKeys.length > 0) {
        primer_next_1.keys = _primer_next_1_allKeys[_primer_next_1_allKeys.length - 1].name;  // just the last key pressed
        primer_next_1.rt = _primer_next_1_allKeys[_primer_next_1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_3* updates
    if (t >= 2 && continue_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_3.tStart = t;  // (not accounting for frame time here)
      continue_3.frameNStart = frameN;  // exact frame index

      continue_3.setAutoDraw(true);
    }


    // *fractal_top_right* updates
    if (t >= 0.0 && fractal_top_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_top_right.tStart = t;  // (not accounting for frame time here)
      fractal_top_right.frameNStart = frameN;  // exact frame index

      fractal_top_right.setAutoDraw(true);
    }


    // *fractal_middle_left* updates
    if (t >= 0.0 && fractal_middle_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_middle_left.tStart = t;  // (not accounting for frame time here)
      fractal_middle_left.frameNStart = frameN;  // exact frame index

      fractal_middle_left.setAutoDraw(true);
    }


    // *fractal_middle_right* updates
    if (t >= 0.0 && fractal_middle_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_middle_right.tStart = t;  // (not accounting for frame time here)
      fractal_middle_right.frameNStart = frameN;  // exact frame index

      fractal_middle_right.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_primer_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_primer_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'block_primer_1'-------
    for (const thisComponent of block_primer_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('primer_next_1.keys', primer_next_1.keys);
    if (typeof primer_next_1.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('primer_next_1.rt', primer_next_1.rt);
      routineTimer.reset();
    }

    primer_next_1.stop();
    // the Routine "block_primer_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var primer_txt_2;
var resume;
var _primer_next_2_allKeys;
var block_primer_2Components;
function block_primer_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'block_primer_2'-------
    t = 0;
    block_primer_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((blocks_run === 0)) {
      primer_txt_2 = "You will complete a total of " + (learning_trial_num +
        transfer_trial_num) + " trials. There will be a short break after " + learning_trial_num + " trials. Use your mouse and press the left mouse button to indicate your choice.";

    } else {

      primer_txt_2 = "You have left a total of " + transfer_trial_num + " trials in the experiment. Use your mouse and press the left mouse button to indicate your choice.";
      resume = "Press the right arrow to continue.";
    }


    if ((blocks_run === 0)) {
      resume = "Press the right arrow to begin the first trial.";
    } else {
      resume = "Press the right arrow to continue.";
    }

    // console.log(resume);
    primer_2_text.setText(primer_txt_2);
    primer_next_2.keys = undefined;
    primer_next_2.rt = undefined;
    _primer_next_2_allKeys = [];
    // keep track of which components have finished
    block_primer_2Components = [];
    block_primer_2Components.push(primer_2_text);
    block_primer_2Components.push(primer_next_2);
    block_primer_2Components.push(continue_4);

    for (const thisComponent of block_primer_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_primer_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'block_primer_2'-------
    // get current time
    t = block_primer_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *primer_2_text* updates
    if (t >= 0.0 && primer_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      primer_2_text.tStart = t;  // (not accounting for frame time here)
      primer_2_text.frameNStart = frameN;  // exact frame index

      primer_2_text.setAutoDraw(true);
    }


    // *primer_next_2* updates
    if (t >= 5 && primer_next_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      primer_next_2.tStart = t;  // (not accounting for frame time here)
      primer_next_2.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { primer_next_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { primer_next_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { primer_next_2.clearEvents(); });
    }

    if (primer_next_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = primer_next_2.getKeys({ keyList: ['right'], waitRelease: false });
      _primer_next_2_allKeys = _primer_next_2_allKeys.concat(theseKeys);
      if (_primer_next_2_allKeys.length > 0) {
        primer_next_2.keys = _primer_next_2_allKeys[_primer_next_2_allKeys.length - 1].name;  // just the last key pressed
        primer_next_2.rt = _primer_next_2_allKeys[_primer_next_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_4* updates
    if (t >= 5 && continue_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_4.tStart = t;  // (not accounting for frame time here)
      continue_4.frameNStart = frameN;  // exact frame index

      continue_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_primer_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_primer_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'block_primer_2'-------
    for (const thisComponent of block_primer_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('primer_next_2.keys', primer_next_2.keys);
    if (typeof primer_next_2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('primer_next_2.rt', primer_next_2.rt);
      routineTimer.reset();
    }

    primer_next_2.stop();
    // the Routine "block_primer_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var trials_rep;
var initialize_trials_to_runComponents;
function initialize_trials_to_runRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'initialize_trials_to_run'-------
    t = 0;
    initialize_trials_to_runClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trials_rep = 0;

    // keep track of which components have finished
    initialize_trials_to_runComponents = [];

    for (const thisComponent of initialize_trials_to_runComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function initialize_trials_to_runRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'initialize_trials_to_run'-------
    // get current time
    t = initialize_trials_to_runClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of initialize_trials_to_runComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initialize_trials_to_runRoutineEnd() {
  return async function () {
    //------Ending Routine 'initialize_trials_to_run'-------
    for (const thisComponent of initialize_trials_to_runComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "initialize_trials_to_run" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var decisionComponents;
var fractalA;
var fractalB;
function decisionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'decision'-------
    t = 0;
    decisionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    fa_click = 0;
    fb_click = 0;
    trials_rep = (trials_rep + complete_trial);
    sdm = false;
    complete_trial = 1;
    psychoJS.experiment.addData("pair_onset_time", globalClock.getTime());
    r_fractal_position = Math.random();;
    if ((r_fractal_position > 0.5)) {
      x_fa = (- 0.45) * window_size(psychoJS.window.size);
      x_fb = 0.45 * window_size(psychoJS.window.size);
      y_fa = .05;
      y_fb = .05;
    } else {
      x_fa = 0.45 * window_size(psychoJS.window.size);
      x_fb = (- 0.45) * window_size(psychoJS.window.size);
      y_fa = .05;
      y_fb = .05;
    }

    if (sequence[trial_index] === 1) {
      fractalA = fractal_ta;
      fractalB = fractal_tb;
    } else {
      fractalA = fractal_ma;
      fractalB = fractal_mb;
    }

    if (window_size(psychoJS.window.size) > 0.56) {
      fractal_size = 0.45;
    } else if (window_size(psychoJS.window.size) > 0.45) {
      fractal_size = window_size(psychoJS.window.size) * 0.8;
      x_fa = x_fa / (0.35 + window_size(psychoJS.window.size));
      x_fb = x_fb / (0.35 + window_size(psychoJS.window.size));
    } else {
      fractal_size = window_size(psychoJS.window.size);
      x_fa = x_fa / (0.3 + window_size(psychoJS.window.size));
      x_fb = x_fb / (0.3 + window_size(psychoJS.window.size));
    }

    // setup some python lists for storing info about the mouse_2
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    fractal_a_dec.setPos([x_fa, y_fa]);
    fractal_a_dec.setImage(fractalA);
    fractal_a_dec.setSize([fractal_size, fractal_size]);
    fractal_b_dec.setPos([x_fb, y_fb]);
    fractal_b_dec.setImage(fractalB);
    fractal_b_dec.setSize([fractal_size, fractal_size]);
    // set context
    if (blocks_run === 0) {
      if (sequence[trial_index] === 1) {
        background_color.setWidth(2);
        background_color.setHeight(2);
        background_color.setFillColor([0.2000, 0.5686, 0.3412]);
        bgp_rt.setImage('my_stimuli/normal_tree.png');
        bgp_lt.setImage('my_stimuli/normal_tree.png');
        bgp_rd.setImage('my_stimuli/normal_tree.png');
        bgp_ld.setImage('my_stimuli/normal_tree.png');
        bgp_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
        bgp_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
        // console.log(0.80 * window_size(psychoJS.window.size));
      } else {
        background_color.setWidth(2);
        background_color.setHeight(2);
        background_color.setFillColor([0.00000, 0.44706, 0.63529]);
        bgp_rt.setImage('my_stimuli/palm_tree.png');
        bgp_lt.setImage('my_stimuli/palm_tree.png');
        bgp_rd.setImage('my_stimuli/palm_tree.png');
        bgp_ld.setImage('my_stimuli/palm_tree.png');
        bgp_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
        bgp_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
      }
    } else {
      background_color_right.setPos([0.5, 0]);
      background_color_right.setWidth(1);
      background_color_right.setHeight(2);
      background_color_left.setPos([-0.5, 0]);
      background_color_left.setWidth(1);
      background_color_left.setHeight(2);
      if (x_fa > 0) {
        background_color_right.setFillColor([0.2000, 0.5686, 0.3412]);
        background_color_left.setFillColor([0.00000, 0.44706, 0.63529]);
        bgp_rt.setImage('my_stimuli/normal_tree.png');
        bgp_lt.setImage('my_stimuli/palm_tree.png');
        bgp_rd.setImage('my_stimuli/normal_tree.png');
        bgp_ld.setImage('my_stimuli/palm_tree.png');
        bgp_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
        bgp_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
      } else {
        background_color_right.setFillColor([0.00000, 0.44706, 0.63529]);
        background_color_left.setFillColor([0.2000, 0.5686, 0.3412]);
        bgp_rt.setImage('my_stimuli/palm_tree.png');
        bgp_lt.setImage('my_stimuli/normal_tree.png');
        bgp_rd.setImage('my_stimuli/palm_tree.png');
        bgp_ld.setImage('my_stimuli/normal_tree.png');
        bgp_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
        bgp_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
      }
    }
    // keep track of which components have finished
    decisionComponents = [];
    decisionComponents.push(mouse_2);
    decisionComponents.push(fractal_a_dec);
    decisionComponents.push(fractal_b_dec);
    decisionComponents.push(choose_text);
    if (blocks_run === 0) {
      decisionComponents.push(background_color);
    } else {
      decisionComponents.push(background_color_right);
      decisionComponents.push(background_color_left);
    }
    decisionComponents.push(bgp_rt);
    decisionComponents.push(bgp_lt);
    decisionComponents.push(bgp_rd);
    decisionComponents.push(bgp_ld);

    for (const thisComponent of decisionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function decisionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'decision'-------
    // get current time
    t = decisionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (fractal_a_dec.contains(mouse_2) && mouse_2.getPressed()[0] === 1) {
      psychoJS.experiment.addData("mouse_2.rt", decisionClock.getTime());
      psychoJS.experiment.addData("dec_choicetime", globalClock.getTime());
      fa_click = 1;
    } else {
      if (fractal_b_dec.contains(mouse_2) && mouse_2.getPressed()[0] === 1) {
        psychoJS.experiment.addData("mouse_2.rt", decisionClock.getTime());
        psychoJS.experiment.addData("dec_choicetime", globalClock.getTime());
        fb_click = 1;
      }
    }
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index

      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
    }
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_2.status = PsychoJS.Status.FINISHED;
    }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every((e, i, ) => (e == prevButtonState[i]))) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce((e, acc) => (e + acc)) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [fractal_a_dec, fractal_b_dec]) {
            if (obj.contains(mouse_2)) {
              gotValidClick = true;
              mouse_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    if (blocks_run === 0) {
      // *background_color* updates
      if (t >= 0.0 && background_color.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        background_color.tStart = t;  // (not accounting for frame time here)
        background_color.frameNStart = frameN;  // exact frame index

        background_color.setAutoDraw(true);
      }

      frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (background_color.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        background_color.setAutoDraw(false);
      }
    } else {
      // *background_color_right* updates
      if (t >= 0.0 && background_color_right.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        background_color_right.tStart = t;  // (not accounting for frame time here)
        background_color_right.frameNStart = frameN;  // exact frame index

        background_color_right.setAutoDraw(true);
      }

      frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (background_color_right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        background_color_right.setAutoDraw(false);
      }

      // *background_color_left* updates
      if (t >= 0.0 && background_color_left.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        background_color_left.tStart = t;  // (not accounting for frame time here)
        background_color_left.frameNStart = frameN;  // exact frame index

        background_color_left.setAutoDraw(true);
      }

      frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (background_color_left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        background_color_left.setAutoDraw(false);
      }
    }

    // *bgp_rt* updates
    if (t >= 0.0 && bgp_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_rt.tStart = t;  // (not accounting for frame time here)
      bgp_rt.frameNStart = frameN;  // exact frame index

      bgp_rt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_rt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_rt.setAutoDraw(false);
    }

    // *bgp_lt* updates
    if (t >= 0.0 && bgp_lt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_lt.tStart = t;  // (not accounting for frame time here)
      bgp_lt.frameNStart = frameN;  // exact frame index

      bgp_lt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_lt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_lt.setAutoDraw(false);
    }

    // *bgp_rd* updates
    if (t >= 0.0 && bgp_rd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_rd.tStart = t;  // (not accounting for frame time here)
      bgp_rd.frameNStart = frameN;  // exact frame index

      bgp_rd.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_rd.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_rd.setAutoDraw(false);
    }

    // *bgp_ld* updates
    if (t >= 0.0 && bgp_ld.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_ld.tStart = t;  // (not accounting for frame time here)
      bgp_ld.frameNStart = frameN;  // exact frame index

      bgp_ld.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_ld.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_ld.setAutoDraw(false);
    }
    // *fractal_a_dec* updates
    if (t >= 0.0 && fractal_a_dec.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_a_dec.tStart = t;  // (not accounting for frame time here)
      fractal_a_dec.frameNStart = frameN;  // exact frame index

      fractal_a_dec.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fractal_a_dec.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fractal_a_dec.setAutoDraw(false);
    }

    // *fractal_b_dec* updates
    if (t >= 0.0 && fractal_b_dec.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_b_dec.tStart = t;  // (not accounting for frame time here)
      fractal_b_dec.frameNStart = frameN;  // exact frame index

      fractal_b_dec.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fractal_b_dec.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fractal_b_dec.setAutoDraw(false);
    }

    // *choose_text* updates
    if (t >= 0.0 && choose_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choose_text.tStart = t;  // (not accounting for frame time here)
      choose_text.frameNStart = frameN;  // exact frame index

      choose_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (choose_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      choose_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of decisionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

var fractalA_R;
var fractalB_R;
function decisionRoutineEnd() {
  return async function () {
    //------Ending Routine 'decision'-------
    for (const thisComponent of decisionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (blocks_run === 0) {
      if (sequence[trial_index] == 1) {
        fractalA_R = array_1[first_pair_index];
        fractalB_R = array_2[first_pair_index];
        console.log("first pair " + first_pair_index);
      } else {
        fractalA_R = array_3[second_pair_index];
        fractalB_R = array_4[second_pair_index];
        console.log("second pair " + second_pair_index);
      }
    } else {
      if (sequence[trial_index] == 1) {
        fractalA_R = array_1[first_pair_index];
        fractalB_R = array_3[first_pair_index];
        console.log("first pair " + first_pair_index);
      } else {
        fractalA_R = array_2[second_pair_index];
        fractalB_R = array_4[second_pair_index];
        console.log("second pair " + second_pair_index);
      }
    }
    if (((fa_click === 0) && (fb_click === 0))) {
      sdm = true;
      complete_trial = 0;
    } else {
      outcome_a = fractalA_R * 0.1;
      outcome_b = fractalB_R * 0.1;
      if (fa_click) {
        chosen_outcome = fractalA_R;
      } else {
        if (fb_click) {
          chosen_outcome = fractalB_R;
        }
      }
      earnings = (earnings + chosen_outcome);
      psychoJS.experiment.addData("chosen_outcome", chosen_outcome);
      psychoJS.experiment.addData("outcome_a", outcome_a);
      psychoJS.experiment.addData("outcome_b", outcome_b);
      psychoJS.experiment.addData("chooseA", fa_click);
      psychoJS.experiment.addData("chooseB", fb_click);
      psychoJS.experiment.addData('index_new', trial_index);
      chosen_outcome = 0;
    }

    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_2.getPos();
    _mouseButtons = mouse_2.getPressed();
    psychoJS.experiment.addData('mouse_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_2.rightButton', _mouseButtons[2]);
    if (mouse_2.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name[0]);
    }
    return Scheduler.Event.NEXT;
  };
}


var selectedComponents;
function selectedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'selected'-------
    t = 0;
    selectedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    outline_fb.setOpacity(fb_click);
    outline_fb.setPos([x_fb, y_fb]);
    outline_fb.setWidth([fractal_size + 0.05, fractal_size + 0.05][0]);
    outline_fb.setHeight([fractal_size + 0.05, fractal_size + 0.05][1]);
    outline_fa.setOpacity(fa_click);
    outline_fa.setPos([x_fa, y_fa]);
    outline_fa.setWidth([fractal_size + 0.05, fractal_size + 0.05][0]);
    outline_fa.setHeight([fractal_size + 0.05, fractal_size + 0.05][1]);
    fractal_b_slctd.setPos([x_fb, y_fb]);
    fractal_b_slctd.setImage(fractalB);
    fractal_b_slctd.setSize([fractal_size, fractal_size]);
    fractal_a_slctd.setPos([x_fa, y_fa]);
    fractal_a_slctd.setImage(fractalA);
    fractal_a_slctd.setSize([fractal_size, fractal_size]);
    // set context
    if (blocks_run === 0) {
      if (sequence[trial_index] === 1) {
        background_color.setWidth(2);
        background_color.setHeight(2);
        background_color.setFillColor([0.2000, 0.5686, 0.3412]);
        bgp_rt.setImage('my_stimuli/normal_tree.png');
        bgp_lt.setImage('my_stimuli/normal_tree.png');
        bgp_rd.setImage('my_stimuli/normal_tree.png');
        bgp_ld.setImage('my_stimuli/normal_tree.png');
        bgp_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
        bgp_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
      } else {
        background_color.setWidth(2);
        background_color.setHeight(2);
        background_color.setFillColor([0.00000, 0.44706, 0.63529]);
        bgp_rt.setImage('my_stimuli/palm_tree.png');
        bgp_lt.setImage('my_stimuli/palm_tree.png');
        bgp_rd.setImage('my_stimuli/palm_tree.png');
        bgp_ld.setImage('my_stimuli/palm_tree.png');
        bgp_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
        bgp_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
      }
    } else {
      background_color_right.setPos([0.5, 0]);
      background_color_right.setWidth(1);
      background_color_right.setHeight(2);
      background_color_left.setPos([-0.5, 0]);
      background_color_left.setWidth(1);
      background_color_left.setHeight(2);
      if (x_fa > 0) {
        background_color_right.setFillColor([0.2000, 0.5686, 0.3412]);
        background_color_left.setFillColor([0.00000, 0.44706, 0.63529]);
        bgp_rt.setImage('my_stimuli/normal_tree.png');
        bgp_lt.setImage('my_stimuli/palm_tree.png');
        bgp_rd.setImage('my_stimuli/normal_tree.png');
        bgp_ld.setImage('my_stimuli/palm_tree.png');
        bgp_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
        bgp_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
      } else {
        background_color_right.setFillColor([0.00000, 0.44706, 0.63529]);
        background_color_left.setFillColor([0.2000, 0.5686, 0.3412]);
        bgp_rt.setImage('my_stimuli/palm_tree.png');
        bgp_lt.setImage('my_stimuli/normal_tree.png');
        bgp_rd.setImage('my_stimuli/palm_tree.png');
        bgp_ld.setImage('my_stimuli/normal_tree.png');
        bgp_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
        bgp_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
      }
    }
    // keep track of which components have finished
    selectedComponents = [];
    selectedComponents.push(outline_fb);
    selectedComponents.push(outline_fa);
    selectedComponents.push(fractal_b_slctd);
    selectedComponents.push(fractal_a_slctd);
    if (blocks_run === 0) {
      selectedComponents.push(background_color);
    } else {
      selectedComponents.push(background_color_right);
      selectedComponents.push(background_color_left);
    }
    selectedComponents.push(bgp_rt);
    selectedComponents.push(bgp_lt);
    selectedComponents.push(bgp_rd);
    selectedComponents.push(bgp_ld);

    for (const thisComponent of selectedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function selectedRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'selected'-------
    // get current time
    t = selectedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (blocks_run === 0) {
      // *background_color* updates
      if (t >= 0.0 && background_color.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        background_color.tStart = t;  // (not accounting for frame time here)
        background_color.frameNStart = frameN;  // exact frame index

        background_color.setAutoDraw(true);
      }

      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (background_color.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        background_color.setAutoDraw(false);
      }
    } else {
      // *background_color_right* updates
      if (t >= 0.0 && background_color_right.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        background_color_right.tStart = t;  // (not accounting for frame time here)
        background_color_right.frameNStart = frameN;  // exact frame index

        background_color_right.setAutoDraw(true);
      }

      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (background_color_right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        background_color_right.setAutoDraw(false);
      }

      // *background_color_left* updates
      if (t >= 0.0 && background_color_left.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        background_color_left.tStart = t;  // (not accounting for frame time here)
        background_color_left.frameNStart = frameN;  // exact frame index

        background_color_left.setAutoDraw(true);
      }

      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (background_color_left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        background_color_left.setAutoDraw(false);
      }
    }

    // *bgp_rt* updates
    if (t >= 0.0 && bgp_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_rt.tStart = t;  // (not accounting for frame time here)
      bgp_rt.frameNStart = frameN;  // exact frame index

      bgp_rt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_rt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_rt.setAutoDraw(false);
    }

    // *bgp_lt* updates
    if (t >= 0.0 && bgp_lt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_lt.tStart = t;  // (not accounting for frame time here)
      bgp_lt.frameNStart = frameN;  // exact frame index

      bgp_lt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_lt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_lt.setAutoDraw(false);
    }

    // *bgp_rd* updates
    if (t >= 0.0 && bgp_rd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_rd.tStart = t;  // (not accounting for frame time here)
      bgp_rd.frameNStart = frameN;  // exact frame index

      bgp_rd.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_rd.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_rd.setAutoDraw(false);
    }

    // *bgp_ld* updates
    if (t >= 0.0 && bgp_ld.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_ld.tStart = t;  // (not accounting for frame time here)
      bgp_ld.frameNStart = frameN;  // exact frame index

      bgp_ld.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_ld.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_ld.setAutoDraw(false);
    }
    // *outline_fb* updates
    if (t >= 0.0 && outline_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outline_fb.tStart = t;  // (not accounting for frame time here)
      outline_fb.frameNStart = frameN;  // exact frame index

      outline_fb.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outline_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outline_fb.setAutoDraw(false);
    }

    // *outline_fa* updates
    if (t >= 0.0 && outline_fa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outline_fa.tStart = t;  // (not accounting for frame time here)
      outline_fa.frameNStart = frameN;  // exact frame index

      outline_fa.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outline_fa.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outline_fa.setAutoDraw(false);
    }

    // *fractal_b_slctd* updates
    if (t >= 0.0 && fractal_b_slctd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_b_slctd.tStart = t;  // (not accounting for frame time here)
      fractal_b_slctd.frameNStart = frameN;  // exact frame index

      fractal_b_slctd.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fractal_b_slctd.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fractal_b_slctd.setAutoDraw(false);
    }

    // *fractal_a_slctd* updates
    if (t >= 0.0 && fractal_a_slctd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_a_slctd.tStart = t;  // (not accounting for frame time here)
      fractal_a_slctd.frameNStart = frameN;  // exact frame index

      fractal_a_slctd.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fractal_a_slctd.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fractal_a_slctd.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of selectedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function selectedRoutineEnd() {
  return async function () {
    //------Ending Routine 'selected'-------
    for (const thisComponent of selectedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    if (sequence[trial_index] == 1) {
      first_pair_index = first_pair_index + 1;
    } else {
      console.log("this line runs");
      second_pair_index = second_pair_index + 1;
    }
    trial_index = trial_index + 1;
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    outline_fb_2.setOpacity(fb_click);
    outline_fb_2.setPos([x_fb, y_fb]);
    outline_fb_2.setWidth([fractal_size + 0.05, fractal_size + 0.05][0]);
    outline_fb_2.setHeight([fractal_size + 0.05, fractal_size + 0.05][1]);
    outline_fa_2.setOpacity(fa_click);
    outline_fa_2.setPos([x_fa, y_fa]);
    outline_fa_2.setWidth([fractal_size + 0.05, fractal_size + 0.05][0]);
    outline_fa_2.setHeight([fractal_size + 0.05, fractal_size + 0.05][1]);
    fractal_b_fdbk.setPos([x_fb, y_fb]);
    fractal_b_fdbk.setImage(fractalB);
    fractal_b_fdbk.setSize([fractal_size, fractal_size]);
    fractal_a_fdbk.setPos([x_fa, y_fa]);
    fractal_a_fdbk.setImage(fractalA);
    fractal_a_fdbk.setSize([fractal_size, fractal_size]);
    if ((outcome_a > 0)) {
      outcome_txt_a = outcome_a.toString();
      sign_a = "+";
      color_a = "black";
    } else {
      if ((outcome_a === 0)) {
        outcome_txt_a = outcome_a.toString();
        sign_a = "";
        color_a = "black";
      } else {
        if ((outcome_a < 0)) {
          outcome_txt_a = (- outcome_a).toString();
          sign_a = "-";
          color_a = "red";
        }
      }
    }
    outcome_a_string = ((sign_a + outcome_txt_a) + "\u20ac");
    if ((outcome_b > 0)) {
      outcome_txt_b = outcome_b.toString();
      sign_b = "+";
      color_b = "black";
    } else {
      if ((outcome_b === 0)) {
        outcome_txt_b = outcome_b.toString();
        sign_b = "";
        color_b = "black";
      } else {
        if ((outcome_b < 0)) {
          outcome_txt_b = (- outcome_b).toString();
          sign_b = "-";
          color_b = "red";
        }
      }
    }
    outcome_b_string = ((sign_b + outcome_txt_b) + "\u20ac");

    outcome_amount_a.setColor(new util.Color(color_a));
    outcome_amount_a.setPos([x_fa, y_outcome_text]);
    outcome_amount_a.setOpacity(fa_click);
    outcome_amount_a.setText(outcome_a_string);
    outcome_amount_b.setColor(new util.Color(color_b));
    outcome_amount_b.setPos([x_fb, y_outcome_text]);
    outcome_amount_b.setOpacity(fb_click);
    outcome_amount_b.setText(outcome_b_string);
    // set context
    if (blocks_run === 0) {
      if (sequence[trial_index - 1] === 1) {
        background_color.setWidth(2);
        background_color.setHeight(2);
        background_color.setFillColor([0.2000, 0.5686, 0.3412]);
        bgp_rt.setImage('my_stimuli/normal_tree.png');
        bgp_lt.setImage('my_stimuli/normal_tree.png');
        bgp_rd.setImage('my_stimuli/normal_tree.png');
        bgp_ld.setImage('my_stimuli/normal_tree.png');
        bgp_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
        bgp_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
      } else {
        background_color.setWidth(2);
        background_color.setHeight(2);
        background_color.setFillColor([0.00000, 0.44706, 0.63529]);
        bgp_rt.setImage('my_stimuli/palm_tree.png');
        bgp_lt.setImage('my_stimuli/palm_tree.png');
        bgp_rd.setImage('my_stimuli/palm_tree.png');
        bgp_ld.setImage('my_stimuli/palm_tree.png');
        bgp_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
        bgp_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
      }
    } else {
      background_color_right.setPos([0.5, 0]);
      background_color_right.setWidth(1);
      background_color_right.setHeight(2);
      background_color_left.setPos([-0.5, 0]);
      background_color_left.setWidth(1);
      background_color_left.setHeight(2);
      if (x_fa > 0) {
        background_color_right.setFillColor([0.2000, 0.5686, 0.3412]);
        background_color_left.setFillColor([0.00000, 0.44706, 0.63529]);
        bgp_rt.setImage('my_stimuli/normal_tree.png');
        bgp_lt.setImage('my_stimuli/palm_tree.png');
        bgp_rd.setImage('my_stimuli/normal_tree.png');
        bgp_ld.setImage('my_stimuli/palm_tree.png');
        bgp_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
        bgp_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
      } else {
        background_color_right.setFillColor([0.00000, 0.44706, 0.63529]);
        background_color_left.setFillColor([0.2000, 0.5686, 0.3412]);
        bgp_rt.setImage('my_stimuli/palm_tree.png');
        bgp_lt.setImage('my_stimuli/normal_tree.png');
        bgp_rd.setImage('my_stimuli/palm_tree.png');
        bgp_ld.setImage('my_stimuli/normal_tree.png');
        bgp_rt.setPos([0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_lt.setPos([-0.80 * window_size(psychoJS.window.size), 0.38]);
        bgp_rd.setPos([0.80 * window_size(psychoJS.window.size), -0.38]);
        bgp_ld.setPos([-0.80 * window_size(psychoJS.window.size), -0.38]);
      }
    }
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(outline_fb_2);
    feedbackComponents.push(outline_fa_2);
    feedbackComponents.push(fractal_b_fdbk);
    feedbackComponents.push(fractal_a_fdbk);
    feedbackComponents.push(outcome_amount_a);
    feedbackComponents.push(outcome_amount_b);
    if (blocks_run === 0) {
      feedbackComponents.push(background_color);
    } else {
      feedbackComponents.push(background_color_right);
      feedbackComponents.push(background_color_left);
    }
    feedbackComponents.push(bgp_rt);
    feedbackComponents.push(bgp_lt);
    feedbackComponents.push(bgp_rd);
    feedbackComponents.push(bgp_ld);

    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (blocks_run === 0) {
      // *background_color* updates
      if (t >= 0.0 && background_color.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        background_color.tStart = t;  // (not accounting for frame time here)
        background_color.frameNStart = frameN;  // exact frame index

        background_color.setAutoDraw(true);
      }

      frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (background_color.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        background_color.setAutoDraw(false);
      }
    } else {
      // *background_color_right* updates
      if (t >= 0.0 && background_color_right.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        background_color_right.tStart = t;  // (not accounting for frame time here)
        background_color_right.frameNStart = frameN;  // exact frame index

        background_color_right.setAutoDraw(true);
      }

      frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (background_color_right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        background_color_right.setAutoDraw(false);
      }

      // *background_color_left* updates
      if (t >= 0.0 && background_color_left.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        background_color_left.tStart = t;  // (not accounting for frame time here)
        background_color_left.frameNStart = frameN;  // exact frame index

        background_color_left.setAutoDraw(true);
      }

      frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (background_color_left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        background_color_left.setAutoDraw(false);
      }
    }

    // *bgp_rt* updates
    if (t >= 0.0 && bgp_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_rt.tStart = t;  // (not accounting for frame time here)
      bgp_rt.frameNStart = frameN;  // exact frame index

      bgp_rt.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_rt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_rt.setAutoDraw(false);
    }

    // *bgp_lt* updates
    if (t >= 0.0 && bgp_lt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_lt.tStart = t;  // (not accounting for frame time here)
      bgp_lt.frameNStart = frameN;  // exact frame index

      bgp_lt.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_lt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_lt.setAutoDraw(false);
    }

    // *bgp_rd* updates
    if (t >= 0.0 && bgp_rd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_rd.tStart = t;  // (not accounting for frame time here)
      bgp_rd.frameNStart = frameN;  // exact frame index

      bgp_rd.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_rd.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_rd.setAutoDraw(false);
    }

    // *bgp_ld* updates
    if (t >= 0.0 && bgp_ld.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bgp_ld.tStart = t;  // (not accounting for frame time here)
      bgp_ld.frameNStart = frameN;  // exact frame index

      bgp_ld.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bgp_ld.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bgp_ld.setAutoDraw(false);
    }
    // *outline_fb_2* updates
    if (t >= 0.0 && outline_fb_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outline_fb_2.tStart = t;  // (not accounting for frame time here)
      outline_fb_2.frameNStart = frameN;  // exact frame index

      outline_fb_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outline_fb_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outline_fb_2.setAutoDraw(false);
    }

    // *outline_fa_2* updates
    if (t >= 0.0 && outline_fa_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outline_fa_2.tStart = t;  // (not accounting for frame time here)
      outline_fa_2.frameNStart = frameN;  // exact frame index

      outline_fa_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outline_fa_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outline_fa_2.setAutoDraw(false);
    }

    // *fractal_b_fdbk* updates
    if (t >= 0.0 && fractal_b_fdbk.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_b_fdbk.tStart = t;  // (not accounting for frame time here)
      fractal_b_fdbk.frameNStart = frameN;  // exact frame index

      fractal_b_fdbk.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fractal_b_fdbk.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fractal_b_fdbk.setAutoDraw(false);
    }

    // *fractal_a_fdbk* updates
    if (t >= 0.0 && fractal_a_fdbk.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fractal_a_fdbk.tStart = t;  // (not accounting for frame time here)
      fractal_a_fdbk.frameNStart = frameN;  // exact frame index

      fractal_a_fdbk.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fractal_a_fdbk.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fractal_a_fdbk.setAutoDraw(false);
    }

    // *outcome_amount_a* updates
    if (t >= 0.0 && outcome_amount_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outcome_amount_a.tStart = t;  // (not accounting for frame time here)
      outcome_amount_a.frameNStart = frameN;  // exact frame index

      outcome_amount_a.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outcome_amount_a.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outcome_amount_a.setAutoDraw(false);
    }

    // *outcome_amount_b* updates
    if (t >= 0.0 && outcome_amount_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outcome_amount_b.tStart = t;  // (not accounting for frame time here)
      outcome_amount_b.frameNStart = frameN;  // exact frame index

      outcome_amount_b.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outcome_amount_b.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outcome_amount_b.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    outcome_a_string = "";
    outcome_b_string = "";
    if ((complete_trial === 1)) {
      repeat_if_missed.finished = true;
    }

    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var task_timer;
var clock_txt;
var pauseComponents;
function pauseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'pause'-------
    t = 0;
    pauseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    if ((blocks_run === 1)) {
      continueRoutine = false;
    }

    task_timer = new util.Clock();
    clock_txt = ":"

    // keep track of which components have finished
    pauseComponents = [];
    pauseComponents.push(key_resp_2);
    pauseComponents.push(text_9);
    pauseComponents.push(continue_pause);
    pauseComponents.push(text_10);

    for (const thisComponent of pauseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var time_left;
var timeText;
function pauseRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pause'-------
    // get current time
    t = pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *key_resp_2* updates
    if (t >= 180 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index

      text_9.setAutoDraw(true);
    }

    frameRemains = 0.0 + 181 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }

    // *continue_pause* updates
    if (t >= 180 && continue_pause.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_pause.tStart = t;  // (not accounting for frame time here)
      continue_pause.frameNStart = frameN;  // exact frame index

      continue_pause.setAutoDraw(true);
    }

    time_left = task_timer.getTime();
    minutes = Number.parseInt(((180 - time_left) / 60));
    seconds = Number.parseInt(((180 - time_left) - (minutes * 60)));

    if ((seconds <= 9)) {
      timeText = ((minutes.toString() + ":0") + seconds.toString());
    } else {
      if ((seconds >= 10)) {
        timeText = ((minutes.toString() + ":") + seconds.toString());
      }
    }

    // *text_10* updates
    if (t >= 0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index

      text_10.setAutoDraw(true);
    }

    frameRemains = 0 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_10.setAutoDraw(false);
    }

    if (text_10.status === PsychoJS.Status.STARTED) { // only update if being drawn
      text_10.setText(timeText, false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pauseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pauseRoutineEnd() {
  return async function () {
    //------Ending Routine 'pause'-------
    for (const thisComponent of pauseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
    }

    key_resp_2.stop();
    blocks_run = (blocks_run + 1);
    // the Routine "pause" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var main_exp_endComponents;
function main_exp_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'main_exp_end'-------
    t = 0;
    main_exp_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData("main_exp_over", 1);

    // keep track of which components have finished
    main_exp_endComponents = [];

    for (const thisComponent of main_exp_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_exp_endRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'main_exp_end'-------
    // get current time
    t = main_exp_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_exp_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_exp_endRoutineEnd() {
  return async function () {
    //------Ending Routine 'main_exp_end'-------
    for (const thisComponent of main_exp_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "main_exp_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var earn_str;
var total_str;
var payment_code;
var finish_txt;
var _key_resp_35_allKeys;
var payment_screenComponents;
function payment_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'payment_screen'-------
    t = 0;
    payment_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    earn_str = Math.round(earnings, 3).toString();
    total_str = Math.round((earnings + 7), 3).toString();
    payment_code = (earnings * 52).toString();
    finish_txt = (("That's the end of the experiment! You won an additional " + earn_str) + " euros in the experiment. \n\n Please click the -ok- button on the next page to be redirected to Prolific. Your participation will be confirmed within the next days. Thank you very much for participating in this study and contributing to science.");

    text_3.setText(finish_txt);
    key_resp_35.keys = undefined;
    key_resp_35.rt = undefined;
    _key_resp_35_allKeys = [];
    // keep track of which components have finished
    payment_screenComponents = [];
    payment_screenComponents.push(text_3);
    payment_screenComponents.push(key_resp_35);
    payment_screenComponents.push(continue_37);

    for (const thisComponent of payment_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function payment_screenRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'payment_screen'-------
    // get current time
    t = payment_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *text_3* updates
    if (t >= 0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index

      text_3.setAutoDraw(true);
    }


    // *key_resp_35* updates
    if (t >= 4 && key_resp_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_35.tStart = t;  // (not accounting for frame time here)
      key_resp_35.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function () { key_resp_35.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function () { key_resp_35.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function () { key_resp_35.clearEvents(); });
    }

    if (key_resp_35.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_35.getKeys({ keyList: ['right'], waitRelease: false });
      _key_resp_35_allKeys = _key_resp_35_allKeys.concat(theseKeys);
      if (_key_resp_35_allKeys.length > 0) {
        key_resp_35.keys = _key_resp_35_allKeys[_key_resp_35_allKeys.length - 1].name;  // just the last key pressed
        key_resp_35.rt = _key_resp_35_allKeys[_key_resp_35_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *continue_37* updates
    if (t >= 4 && continue_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_37.tStart = t;  // (not accounting for frame time here)
      continue_37.frameNStart = frameN;  // exact frame index

      continue_37.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of payment_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function payment_screenRoutineEnd() {
  return async function () {
    //------Ending Routine 'payment_screen'-------
    for (const thisComponent of payment_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_35.keys', key_resp_35.keys);
    if (typeof key_resp_35.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_35.rt', key_resp_35.rt);
      routineTimer.reset();
    }

    key_resp_35.stop();
    // the Routine "payment_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var save_variablesComponents;
function save_variablesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //------Prepare to start Routine 'save_variables'-------
    t = 0;
    save_variablesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData("earnings", earnings);
    psychoJS.experiment.addData("total_experiment_time", globalClock.getTime());

    // keep track of which components have finished
    save_variablesComponents = [];

    for (const thisComponent of save_variablesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function save_variablesRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'save_variables'-------
    // get current time
    t = save_variablesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of save_variablesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function save_variablesRoutineEnd() {
  return async function () {
    //------Ending Routine 'save_variables'-------
    for (const thisComponent of save_variablesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "save_variables" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
      return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
  };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }


  psychoJS.window.close();
  psychoJS.quit({ message: message, isCompleted: isCompleted });

  return Scheduler.Event.QUIT;
}
