var MIDIController = (function() {

    if (! navigator.requestMIDIAccess) throw 'No MIDI support in browser'

    var MIDI

    var _noteCallback

    navigator.requestMIDIAccess({}).then(go, function(e) {
        console.log('Fail', e)
        throw 'Can not connect to MIDI'
    })

    function doNote(n, v) {
        if(typeof _noteCallback === 'function') _noteCallback(n, v)
    }

    function onMessage(msg) {
        var data = msg.data
        var type = data[0] & 0xf0
        var note = data[1]
        var velocity = data[2]

        if(type === 144) doNote(note, velocity)

        // console.log('msg', msg, 'type', type)
    }

    function go(res) {

        MIDI = res
        MIDI.onstatechange = function(e) {
            console.log('state change', e)
        }

        console.log(MIDI)

        var inputs = MIDI.inputs.values()
        for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
            input.value.onmidimessage = onMessage
        }
    }

    function setNoteCallback(fn) {
        _noteCallback = fn
    }

    return {
        onNote: setNoteCallback
    }

})()

module.exports = MIDIController
