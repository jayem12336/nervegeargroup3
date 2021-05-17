import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default function Avatar() {
    const avatarStyle = { backgroundColor: '#ff961f', height: 100, width: 100, marginTop:10 , marginBottom: 20}
    return (
        <div>
            <Avatar style={avatarStyle}>
                <AccountCircleIcon style={avatarStyle} />
            </Avatar>
        </div>
    )
}
