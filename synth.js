try{
    var context= new webkitAudioContext();
    }
    catch(err){
    alert("this uses the web audio API, try opening it in google chrome \n\n <3 whichlight" );
    }


function Note(y){
    var noteVal = dorian[y];
    var osc = setupSynth();
    osc.source.frequency.value=noteVal;
    osc.source.noteOn(0);

    setTimeout(function(){
        osc.source.stop(0);
    },1000);

}


function setupSynth(){
    var nodes={};
    nodes.source = context.createOscillator();
    nodes.start = context.currentTime;
    nodes.source.type=2;
    nodes.filter = context.createBiquadFilter();
    nodes.volume = context.createGainNode();
    nodes.filter.type=0; //0 is a low pass filter

    nodes.volume.gain.value = 0.1;
    nodes.source.connect(nodes.filter);
    nodes.filter.connect(nodes.volume);
    //frequency val
    nodes.filter.frequency.value=1500;
    nodes.volume.connect(context.destination);
    //envelope stuff
    nodes.attack= 0;
    nodes.decay= 20;
    nodes.now = context.currentTime;
    nodes.envAttackEnd = 0;
    nodes.volume.gain.linearRampToValueAtTime(0.5, 0);
    nodes.volume.gain.setTargetValueAtTime(0, 0, (nodes.decay / 100.0) + 0.001);
    return nodes;
}


