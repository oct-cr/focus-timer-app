import indigo from '@material-ui/core/colors/indigo'
import purple from '@material-ui/core/colors/purple'
import teal from '@material-ui/core/colors/green'


const breakColor = indigo
const focusColor = teal
const stoppedColor = purple


export default theme => {
  const getButtonStyle = color => ({
    backgroundColor: color[600],
    color: theme.palette.getContrastText(color[600]),
    '&:hover': {
      backgroundColor: color[700],
    }
  })

  return {
    break: {
      backgroundColor: breakColor['A100']
    },
    focus: {
      backgroundColor: focusColor['A200']
    },
    stopped: {
      backgroundColor: stoppedColor['A100']
    },
    breakButton: getButtonStyle(breakColor),
    focusButton: getButtonStyle(focusColor),
    stoppedButton: {
      background: 'none',
      border: '.2rem solid',
      borderColor: stoppedColor[600],
      color: stoppedColor[600],
      opacity: .8,
      '&:hover': {
        background: 'none'
      }
    }
  }
}
