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

function mapDispatchToProps(dispatch){

    return {
        getUrl : function(url){
            dispatch(fetchData(url))
        }
    }

}
//两种方式都可以
// const mapDispatchToProps = {
//     getUrl: fetchData
// }

export default connect(mapStateToProps,mapDispatchToProps)(ShowData);