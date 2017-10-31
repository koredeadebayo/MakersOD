
// $(window).scroll(function(){
// 	var scrollh = $(this).scrollTop();
// 	if (scrollh == 0){
// 		$(".navbar").css({'height': '100px'});
// 		$(".")
// 		//Add action if needed
// 		}else{
// 			$(".navbar").css({
// 				'height': '75px'});
// 		}
// });

function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
}