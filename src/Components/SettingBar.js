
const SettingBar = () => {
    const navstyle = require('./styles/NavbarStyles');
    return (
        <>   
            <p style={navstyle.txtstyle}>New Group</p>
            <p style={navstyle.txtstyle}>Settings</p>
            <p style={navstyle.txtstyle}>Starred</p>
            <p style={navstyle.txtstyle}>Create Room</p>
            <p style={navstyle.txtstyle}>Profile</p>

        </>
    );
}

export default SettingBar;