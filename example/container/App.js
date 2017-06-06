// /**
//  * Created by hujiong on 17-6-1.
//  */
//
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ShowData from '../component/ShowData'
import { fetchData } from '../action/showData'
// import * as actionConnect from '../action/showData'

function mapStateToProps(state){
    // console.log('state ',state.getData);
    return {
        source: state.getData.source,
        url : state.getData.url
    }
}

// function mapDispatchToProps(dispatch){
//     // return bindActionCreators(actionConnect, dispatch)
//     return {
//         getUrl : () => dispatch(fetchData)
//     }
//
// }
const mapDispatchToProps = {
    getUrl: fetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowData);