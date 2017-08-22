import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import DatePicker from '../src/components/DatePicker'

storiesOf('DatePicker', module)
  .add('Escolha uma data', () =>
    <DatePicker
      focused={true}
      showClearDate={true}
      onDateChange={action('onDateChange')}
      onFocusChange={action('onFocusChange')}
    />)
  .add('Escolha um periodo de datas', () =>
    <DatePicker
      range
      onDatesChange={action('onDatesChange')}
      onFocusChange={action('onFocusChange')}
    />)
