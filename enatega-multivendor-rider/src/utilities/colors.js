import getEnvVars from '../../environment'

const CustomColors = () => {
  const { PRIMERY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } = getEnvVars()
  console.log('XYZ', PRIMERY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR)

  const colors = {
    primary: PRIMERY_COLOR,
    themeBackground: '#FAFAFA',
    iconColor: '#333333',
    tagColor: PRIMERY_COLOR,
    iconPink: PRIMERY_COLOR,
    radioColor: '#FFF',
    radioOuterColor: PRIMERY_COLOR,
    spinnerColor: PRIMERY_COLOR,
    orderComplete: '#1DB20D',
    orderUncomplete: '#fe0000',
    horizontalLine: '#B8B8B8',
    buttonBackground: PRIMERY_COLOR,
    buttonText: '#FFF',
    buttonBackgroundPink: PRIMERY_COLOR,
    buttonTextPink: '#FFF',
    textErrorColor: '#FA7751',
    headerBackground: '#FFF',
    headerText: '#2a2a2a',
    fontMainColor: '#212121',
    fontSecondColor: '#949393',
    cartContainer: '#FFF',
    startColor: PRIMERY_COLOR,
    white: '#FFF',
    black: '#000'
  }

  return { colors }
}

export default CustomColors
