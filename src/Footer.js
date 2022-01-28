import { StyleSheet, View } from 'react-native';

export default function App() {
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

// const Footer = ({ setCurrentPage }) => {
//     return(
//         <footer className="fixed-bottom d-flex flex-column flex-md-row align-items-center justify-content-evenly w-100 bg-dark text-center">
//             <div className="text-light">
//                 1836 Metzerott Rd, Adelphi, MD 20783
//             </div>
//             <div className="text-light">
//                 (240) 705-4466
//             </div>
//             <div className="text-light">
//                 <Link to={"contact"}  className="btn btn-dark" onClick={() => setCurrentPage('Contact')}>hopegorg@gmail.com</Link>
//             </div>
//         </footer>
//     )
// }

// export default Footer;