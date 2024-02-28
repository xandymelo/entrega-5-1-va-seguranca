
var iframe_f1 = parent.document.querySelector('iframe[name="f-1"]');
var iframe_f1_content = iframe_f1.contentDocument || iframe_f1.contentWindow.document;
var button_b1 = iframe_f1_content.getElementById("b-1");
var textarea_t1 = iframe_f1_content.getElementById("t-1");

var iframe_f2 = parent.document.querySelector('iframe[name="f-2"]');
var iframe_f2_content = iframe_f2.contentDocument || iframe_f2.contentWindow.document;
var button_b2 = iframe_f2_content.getElementById("b-2");
var textarea_t2 = iframe_f2_content.getElementById("t-2");

// console.log(button_b2);
// var button_frame1 = parent.document.frame1.document.getElementById("b-1");
// var textarea_frame1 = parent.document.frame1.document.getElementById("t-1");
// var button_frame2 = parent.document.frame2.document.getElementById("b-2");
// var textarea_frame2 = parent.document.frame2.document.getElementById("t-2");

button_b1.addEventListener('click', function () {
  // console.log(textarea_t2.value);
  textarea_t2.value = textarea_t1.value;
});

button_b2.addEventListener('click', function () {
  // console.log(textarea_t1.value);
  textarea_t1.value = textarea_t2.value;
});