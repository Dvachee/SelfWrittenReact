import {React} from './React';

const MyTitle = React.createClass({
    componentWillMount() {
        console.log('Will Mount')
    },
    componentDidMount() {
        console.log('Mounted method')
    },
    render() {
        console.log('Mounted')
        return React.createElement('h1', null, this.props.message);
    }
});

React.render(
    React.createElement(MyTitle, { message: 'hey there React' }),
    document.getElementById('root')
);


// React.render(
//     React.createElement('h2', null, 'hey there React'),
//     document.getElementById('root')
// );