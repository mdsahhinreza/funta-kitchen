import React from "react";
import { Table } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blogs");
  return (
    <div className="pt-5">
      <div className="container">
        {/* blog 1 */}
        <div className="bg-light rounded text-justify p-5 border border-info border-opacity-50">
          <h1 className="pb-3">
            Blog-1: What Difference between SQL and NoSQL?
          </h1>
          <p className="pt-4">
            If you work with databases, you need to understand the differences
            between SQL, MySQL, and NoSQL. By knowing how they differ, you can
            then ensure you use each one effectively at the right time. Get
            started by checking out the following helpful guide to SQL, MySQL,
            and NoSQL.
          </p>
          <h4 className="text-muted">What Are SQL, MySQL, and NoSQL?</h4>
          <p>
            Structured Query Language, commonly known by the abbreviation SQL,
            is a programming language that is used to manage data that is held
            in a relational database management system or for stream processing
            in a relational database management system.
            <br></br>
            <br></br>
            MySQL is a relational database management system that uses SQL.
            Whereas SQL is primarily used to query and operate database systems,
            MySQL enables you to store, handle, delete, and modify data in an
            organized way.
            <br></br>
            <br></br>
            As for NoSQL, it is a non-relational database that does not use SQL.
            NoSQL databases use a simpler data structure, meaning they are
            quicker, more responsive, and more scalable than traditional
            relational databases.
          </p>
          <h4 className="text-muted">
            The Key Differences Between MySQL and NoSQL
          </h4>
          <p>
            By knowing the precise differences between MySQL and NoSQL, you can
            use each effectively. Both are popular market choices, so it is
            important that you learn about the differences to find the right
            option for your needs.<br></br>
            Here are some of the key differences between MySQL and NoSQL.
            <br></br>
            <br></br>
          </p>
          <ol>
            <li>
              First off, MySQL is a relational database that is based on a
              tabular design. NoSQL is non-relational and has a document-based
              design.
            </li>
            <li>
              A MySQL database is currently more popular in the market than
              NoSQL because the latter is still fairly new. That means, at
              present, MySQL encompasses a large community while NoSQL has a
              comparatively small community.
            </li>
            <li>
              While MySQL is not easily scalable due to rigid schema
              restrictions, NoSQL can easily be scaled because of its dynamic
              schema nature.
            </li>
            <li>
              Another key difference is MySQL requires a detailed database model
              before the creation of the database while NoSQL requires no
              detailed modeling.
            </li>
            <li>
              Also, unlike MySQL, which is a type of relational database, NoSQL
              is more design-based, with examples like CouchDB and MongoDB.
              Furthermore, NoSQL is much more flexible than MySQL.
            </li>
            <li>
              One of the good things about MySQL database management is that it
              is available with a broad range of reporting tools that can help
              the validity of an application. On the other hand, NoSQL databases
              do not have reporting tools for performance testing and analysis.
            </li>
          </ol>
        </div>
        {/* blog 2 */}
        <div className="bg-light rounded text-justify p-5 border border-info border-opacity-50 mt-3">
          <h1 className="pb-3">Blog-2: What is JWT, and how does it work?</h1>
          <p className="pt-4">
            <b>JWT</b>, or <i>JSON Web Token</i>, is an open standard used to
            share security information between two parties — a client and a
            server. Each JWT contains encoded JSON objects, including a set of
            claims. JWTs are signed using a cryptographic algorithm to ensure
            that the claims cannot be altered after the token is issued.
          </p>
          <h4 className="text-muted">How JWT Works?</h4>
          <p>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.<br></br>
            <br></br>A JWT is a string made up of three parts, separated by dots
            (.), and serialized using base64. In the most common serialization
            format, compact serialization, the JWT looks something like this:
            xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings:
          </p>
          <br></br>
          <ol>
            <li>
              The <b>header</b> and the <b>payload</b>.
            </li>
            <li>
              The <b>signature</b>.
            </li>
          </ol>
          <p>
            The <b>JOSE (JSON Object Signing and Encryption) header</b> contains
            the type of token — JWT in this case — and the signing algorithm.
            <br></br>
            <br></br>
            The payload contains the claims. This is displayed as a JSON string,
            usually containing no more than a dozen fields to keep the JWT
            compact. This information is typically used by the server to verify
            that the user has permission to perform the action they are
            requesting.<br></br>
            <br></br>
            There are no mandatory claims for a JWT, but overlaying standards
            may make claims mandatory. For example, when using JWT as bearer
            access token under OAuth2.0, iss, sub, aud, and exp must be present.
            some are more common than others. <br></br>
            <br></br>
            The signature ensures that the token hasn’t been altered. The party
            that creates the JWT signs the header and payload with a secret that
            is known to both the issuer and receiver, or with a private key
            known only to the sender. When the token is used, the receiving
            party verifies that the header and payload match the signature.
          </p>
        </div>
        {/* blog 3 */}
        <div className="bg-light rounded text-justify p-5 border border-info border-opacity-50 mt-3">
          <h1 className="pb-3">Blog-3: What is JWT, and how does it work?</h1>
          <ol>
            <li>
              <b>NodeJS:</b>
              <br></br>
              NodeJS is a cross-platform and opensource Javascript runtime
              environment that allows the javascript to be run on the
              server-side. Nodejs allows Javascript code to run outside the
              browser. Nodejs comes with a lot of modules and mostly used in web
              development.{" "}
            </li>
            <li>
              <b>JavaScript:</b>
              <br></br>
              Javascript is a Scripting language. It is mostly abbreviated as
              JS. It can be said that Javascript is the updated version of the
              ECMA script. Javascript is a high-level programming language that
              uses the concept of Oops but it is based on prototype inheritance.
            </li>
          </ol>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sl</th>
                <th>Java Script</th>
                <th>NodeJS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Javascript is a programming language that is used for writing
                  scripts on the website.
                </td>
                <td>NodeJS is a Javascript runtime environment.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Javascript can only be run in the browsers. </td>
                <td>
                  We can run Javascript outside the browser with the help of
                  NodeJS.
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>It is basically used on the client-side.</td>
                <td>It is mostly used on the server-side.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Javascript is capable enough to add HTML and play with the
                  DOM.{" "}
                </td>
                <td>Nodejs does not have capability to add HTML tags.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  Javascript can run in any browser engine as like JS core in
                  safari and Spidermonkey in Firefox.
                </td>
                <td>
                  V8 is the Javascript engine inside of node.js that parses and
                  runs Javascript.{" "}
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Javascript is used in frontend development.</td>
                <td>Nodejs is used in server-side development.</td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Some of the javascript frameworks are RamdaJS, TypedJS, etc.{" "}
                </td>
                <td>
                  Some of the Nodejs modules are Lodash, express etc. These
                  modules are to be imported from npm.
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  It is the upgraded version of ECMA script that uses Chrome’s
                  V8 engine written in C++.
                </td>
                <td>Nodejs is written in C, C++ and Javascript.</td>
              </tr>
            </tbody>
          </Table>
        </div>
        {/* blog 4 */}
        <div className="bg-light rounded text-justify p-5 border border-info border-opacity-50 mt-3 mb-4">
          <h1 className="pb-3">
            Blog-4: How does <b>NodeJS</b> handle multiple requests at the same
            time?
          </h1>
          <p>
            <b>NodeJS</b> receives multiple client requests and places them into
            EventQueue. <b>NodeJS</b> is built with the concept of event-driven
            architecture. <b>NodeJS</b> has its own EventLoop which is an
            infinite loop that receives requests and processes them. EventLoop
            is the listener for the EventQueue. <br></br>
            <br></br>
            If <b>NodeJS</b> can process the request without I/O blocking then
            the event loop would itself process the request and sends the
            response back to the client by itself. But, it is possible to
            process multiple requests parallelly using the <b>NodeJS</b> cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
