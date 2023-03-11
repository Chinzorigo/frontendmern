import Typography from "antd/es/typography/Typography";
import React from "react";

function AppFooter () {
    return (
        <footer className="AppFooter">
            <Typography>&copy; 2023</Typography>
            <Typography.Link href="mailto:chinzorig.o@gmail.com">chinzorig.o@gmail.com</Typography.Link>
            <Typography.Link href="#">Privacy Policy</Typography.Link>
            <Typography.Link href="#">Terms of Use</Typography.Link>
        </footer>
    )
}

export default AppFooter;