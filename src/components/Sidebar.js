import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';

const Sidebar = () => {
    return ( 
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Slack Clone</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Pankaj Bisht
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
        </SidebarContainer>
     );
}
 
export default Sidebar;

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: #fff;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: #fff;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`

`;