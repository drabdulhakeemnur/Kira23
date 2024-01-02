import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:4
    },
    email:{
        type:String,
        required:true,
        unique:true



    },
    avatar:{
        type:String,
        default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACUCAMAAADF0xngAAAAY1BMVEX///9UWV1OVFh5fIBDSU61t7hJT1NRVlr09PRFS0/6+vpNUldZXmLKy8yqrK03PkRscHNiZmrU1daNkJLt7e6Zm52/wMHa29yAg4bg4eGjpadna28+REqTlph0d3rm5+cuNjyyA+Z7AAAEg0lEQVR4nO2c2XLjKhBAjRYQQmixVmux5v+/8kpxZuLxxBZLA/EtzlMqD6lTLOqGbnI6wZCsfKkizFhACAkYw7Ra+JoA/XUYzvmAZ0zQPWT7zZCfXav9gV8RDtB3BBhduWu9nYSj4nvFzyEtEHc+8Tyk5IXjhycN3Y5nUz+Z6seJrxt3kjyjAo47NHM2nDkTGcjP4WS5E8dkiIQdd6LBwSZqJCV3TeuLMwmxpCRCOLQ8mmklL7lpVqlVyUV2um9Ei03NXPQL9Ai1uNP5rCiJ0Gztu5mgo6D4HIJs7aBaZef8Btd2JDsdyU2zsyGZTuJx8TuCycY+j9W3zo05Ni+ZZupb5wbJzA9mrLcqd7DxwUxCvVW5ExiP5z3TlkSI9YYtR9XYeA8dDVtqhJ0vCDIruRYAkggVq1HLWC1jeyQyu8sBdvhOEJqUTCeIZbktTKNR8pKBSCKUXQxaciBJhEwmwx3EN32HmUzfcv0gfgObPP+8h+UIZmkyRr6H5XvMuLeEI4YJ41sgN5luvEfseY84nlRAOVFl9Hx2hbE0m1+qX1z+jeFrzAvQucfkstwgIGdIYlby1IKcx1vDlmeI6INNV83f457olOsfKiyUJN/j/vKUa98F26j5JJqDSTIrtRSutzKxnbpUOuhossFSKbLBGrUzbK1I3qkHIGqlJnWjVb3GjEzHxnvSQS1QYluL8lNzUuo1sFLcu2NV0MST2ev0b2iusluIXh00aMm26jho1NlJlkj8u0mixVXnYJeJLk6cWfxOPnKpC5HhJEVt+Dh2QJexw/5L5nIgbyTxFL06ZATRFDvvZd1Y46l4kn8QXFSx9Y/kMy5LhTAO7lVJgDGqHK/HR1Ke1yWZ54hijGk0z6Ssc245IIqQNmvP47Ft2zHm/dr8QEWPx+P5MaTJjR/2rUyTprmc47EOJ4SjDbqz/4DRFNbb9/3SNE6lk77L22GiH3Ex+OfGnWyhfI+VdBravOudnCfOY1hmjOLD9HJPMDFlWRmOVp93NX1e/pqxZLmCEDz/KnM7Y5ry9jq/zHtfwaL52hp/4bUuFRF6HvWcAJNqMZgZN135LCmXY0vhy87MzDdjOUM1PW1TP19HeM9mZBLvt0QIGAP2bGIG03j5NxGLAT15efjoUQ1CS6hawDrMZhw/POcBZL/HwpdBauBMvx8mbQ1N9heEtprZSF/BtEC8hlZabfZnZHa2f4ORRiLSgfQ/iECI8rVcJ3Q5CaRZKGpqvtySRe2lFwdJLMQhKsXeXuJqH0gzkt7pjeYbOBWCSTKqqxYa9ZAtU+YmUqBjIqmWjgamnU2eQmbOgRoY5Qmu4pKd/Z3zR1P4q5mUDi1L0WNw52pV7ghHSu0eMR1IJibJbaSUz6FigbKGO3WrwISewa9AL+BUIULdHdxN2PlCaMpBXuJqWQq8/UmBHmaqE4THOUfiesK3nOP4w+4s0fhCIOU46zbU6jMfH3u7HzDjx0ES6O21luXxxZG39Jbe0lt6S2/pLb2lt/SW3tJbektv+T+znAPXCPzrya4MXVP+c7fxHyQZWHxdLwFJAAAAAElFTkSuQmCC"
    },

},{timestamps:true}
)

const User= mongoose.model('User', userSchema)
export default User;