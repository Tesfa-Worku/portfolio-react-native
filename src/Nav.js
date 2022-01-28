import { StyleSheet, View } from 'react-native';

export default function Nav() {
    return (
        <View style={styles.container}>      
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


// import { Link } from 'react-router-dom';

// const Nav = ({ currentPage, setCurrentPage}) => {

//     const classList = (pageName) => {
//         return currentPage === pageName
//             ? 'nav-link active'
//             : 'nav-link';
//     }

//     return(
//         <header className="d-flex flex-column justify-content-evenly bg-dark p-3">
//             <nav className="navbar navbar-dark bg-dark flex-wrap h-100 w-100 align-content-end">
//                 <Link
//                     className="navbar-brand text-light p-lg-2"
//                     to={"/"}
//                     onClick={() => setCurrentPage('Profile')}
//                 >
//                     <span className="fs-3">Hi, I'm <strong>Tesfa Worku</strong></span><br/>
//                     <small>I build things for the <strong>web</strong></small>
//                 </Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon m-3 p-3"></span>
//                 </button>
//                 <div className="collapse navbar-collapse mt-lg-5" id="mainMenu">
//                     <ul className="navbar-nav flex-column border-light border-top w-100">
//                         <li className="nav-item border-light border-bottom">
//                             <Link
//                                 className={classList('Profile')}
//                                 to={"/"}
//                                 onClick={() => setCurrentPage('Profile')}>
//                                     Profile
//                             </Link>
//                         </li>
//                         <li className="nav-item border-light border-bottom">
//                             <Link 
//                                 className={classList('Career')} 
//                                 to={"/career-development"} onClick={() => setCurrentPage('Career')}>
//                                     Career Development
//                             </Link>
//                         </li>
//                         <li className="nav-item border-light border-bottom">
//                             <Link 
//                                 className={classList('Portfolio')} 
//                                 to={"/portfolio"} 
//                                 onClick={() => setCurrentPage('Portfolio')}>
//                                     Portfolio
//                             </Link>
//                         </li>
//                         <li className="nav-item border-light border-bottom">
//                             <Link 
//                                 className={classList('Education')} 
//                                 to={"/education"} 
//                                 onClick={() => setCurrentPage('Education')}>
//                                     Education
//                             </Link>
//                         </li>
//                         <li className="nav-item border-light border-bottom">
//                             <Link   
//                                 className={classList('Contact')} 
//                                 to={"/contact"} 
//                                 onClick={() => setCurrentPage('Contact')}>
//                                     Contact Tesfa
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>                
//             </nav>
//         </header>
//     )
// }

// export default Nav;