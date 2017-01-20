import settings from 'lib/settings.js'

var MIDIController = (function() {

    if (! navigator.requestMIDIAccess) throw 'No MIDI support in browser'

    var MIDI

    var _padCallback
    var _pitchCallback
    var _stateCallback

    navigator.requestMIDIAccess({}).then(go, function(e) {
        console.log('Fail', e)
        throw 'Can not connect to MIDI'
    })

    function doPad(pad, velocity) {
        if(typeof _padCallback === 'function') _padCallback(pad, velocity)
    }

    function doPitch(pitch, value) {
        if(typeof _pitchCallback === 'function') _pitchCallback(pitch, value)
    }

    function onMessage(msg) {
        var data = msg.data
        var type = data[0] & 0xf0
        var note = data[1]
        var velocity = data[2]

        if(type === settings.type.pad) {
          var pad = data[1]
          var velocity = data[2]
          doPad(pad, velocity)
        }

        if(type === settings.type.pitch) {
          var pitch = data[1]
          var value = data[2]
          doPitch(pitch, value)
        }

        // console.log('msg', msg, 'type', type)
    }

    function go(res) {

        MIDI = res
        MIDI.onstatechange = function(e) {
            // console.log('state change', e)
            _stateCallback(e)
        }

        var inputs = MIDI.inputs.values()
        for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
            input.value.onmidimessage = onMessage
        }
    }

    function setPadCallback(fn) {
        _padCallback = fn
    }

    function setPitchCallback(fn) {
        _pitchCallback = fn
    }

    function setStateCallback(fn) {
        _stateCallback = fn
    }

    return {
        onPad: setPadCallback,
        onPitch: setPitchCallback,
        onStateChange: setStateCallback
    }

})()

module.exports = MIDIController
