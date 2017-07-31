import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import CapsuleChart from './../src';

const chartData = [
  {
    label: "label1",
    weight: 6
  }, {
    label: "label2",
    weight: 9
  }, {
    label: "label3",
    weight: 5
  }
]

storiesOf('CapsuleChart', module).add('Basic', () => (<CapsuleChart chartData={chartData}/>));
