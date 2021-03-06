const {h, Component} = require('preact')
const Bar = require('./Bar')
const t = require('../../i18n').context('GuessBar')

class GuessBar extends Component {
    render(props) {
        return h(Bar, Object.assign({type: 'guess'}, props),
            t('猜猜下一步棋。')
        )
    }
}

module.exports = GuessBar
