import React from 'react';

const Blog = () => {
    return (
        <div className='ml-10 mr-20'>
            <h1 className='font-bold'>1. When we use Context API?</h1>
            <p>The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.</p> <br />

            <h1 className='font-bold'>2. What is custom Hook?</h1>
            <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature.</p> <br />

            <h1 className='font-bold'>3. What is useRef? where is it use?</h1>
            <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .
                <p>use:mainly used for creating a reference of the DOM element or directly accessing it inside a functional component.</p>
            </p> <br />

            <h1 className='font-bold'>4. What is useMemo?</h1>
            <p>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
            <p></p>
        </div>
    );
};

export default Blog;