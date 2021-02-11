import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions} from "../../action/authAction";
class HomePage extends React.Component {
    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Welcome to my website !!!!!!!! {user.firstName}!</h1>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}
const mapDispatchToProps = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapStateToProps,mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };