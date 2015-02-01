/**
 * Created by chen on 11/17/14.
 */
var labels = "news finance sports ent video tech auto media lady edu".split(" ");
var posMaps = [];
var fixedLabel = document.getElementById('fixed-title');
labels.forEach(function(val, key){
    var e = document.getElementById('mod-'+val);
    var offsetTop = e.offsetTop,
        c = 0;

    "edu" == val && (c = -53);
    posMaps.push({id: val, top: offsetTop, bottom: offsetTop + e.offsetHeight + c, el: e});
});

