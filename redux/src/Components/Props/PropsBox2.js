import Box from "../Presenter/Box";
import PropsBox3 from "./PropsBox3";

const PropsBox2 = (props) => {
    return (
        <Box>
            <PropsBox3 props={props.props} />
        </Box>
    )
}

export default PropsBox2;