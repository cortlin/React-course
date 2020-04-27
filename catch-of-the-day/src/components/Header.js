import React from 'react';

//STATELESS FUNCTIONAL COMPONENT EXAMPLE
const Header = props => {
    return (<header className="top">
        <h1>Catch
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the">the</span>
            </span>
        Day</h1>
        <h3 className="tagline">

            <span>{props.tagline}</span>
        </h3>
    </header>);
};

export default Header;

//This is the long and unnecessary way tor write the same thing. Only using props so it's not necessary. 

// export default class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>Catch
//                 <span className="ofThe">
//                     <span className="of">of</span>
//                     <span className="the">the</span>
//                 </span>
//                 Day</h1>
//                 <h3 className="tagline">
//                     {/*"this" references the "Header" class*/}
//                     <span>{this.props.tagline}</span> 
//                 </h3>
//             </header>  
//         )
//     }
// }