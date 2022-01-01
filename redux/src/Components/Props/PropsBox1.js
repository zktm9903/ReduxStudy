import Box from "../Presenter/Box";
import PropsBox2 from "./PropsBox2";

const PropsBox1 = (props) => {
    return (
        <Box>
            <PropsBox2 props={props.props} />
        </Box>
    )
}

export default PropsBox1;