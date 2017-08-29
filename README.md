# react-capsule-chart

React Component for Capsule Chart

## Installation

```sh
$ yarn add react-capsule-chart
```
<a href="https://app.codesponsor.io/link/wgk6b4VsPhVtCnJng2RZXPmH/mkkhedawat/react-capsule-chart" rel="nofollow"><img src="https://app.codesponsor.io/embed/wgk6b4VsPhVtCnJng2RZXPmH/mkkhedawat/react-capsule-chart.svg" style="width: 888px; height: 68px;" alt="Sponsor" /></a>

## Usage

```js
import CapsuleChart from 'react-capsule-chart';

const chartData = [
    {
        label: "hello",
        weight: 6
    }, {
        label: "hello2",
        weight: 9
    }, {
        label: "hello3",
        weight: 5
    }
]

export default class LandingComponent extends React.Component {
    constructor(props) {
        super(props);
        };
    }
    render() {
        return (
            <CapsuleChart chartData={chartData}/>
        );
    }
}

```

## Note
It is a work in progress
