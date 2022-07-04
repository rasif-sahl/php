import React from 'react';
import '../../../scss/pages/sideBar.scss';
import {H1, H2, H3, H4} from '../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../ReusableComponents/Pagination.jsx';
import {Code} from '../../ReusableComponents/Code.jsx';

export default function CodingStyle() {

    const phpcs = `phpcs -sw --standard=PSR1 file.php`;

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <H1 h1="Code style guide" />
                <p>
                    The PHP community is large and divers, composed of innumerable frameworks, libraries and components.
                    It is common for PHP developers to choose several of these and then combine them into a single project.
                    It is important that PHP code adhere ( as close as possible ) to a common code style to make it easy for developers to
                    mix and match various libraries for their project.
                </p>

                <p>
                    The Framework Interop Group has proposed and approved a series of style recommendations. But not all of them are related to coding styles,
                    but those that do are <b>PSR-1, PSR-4, PSR-12</b> These recomendations are merely a set of rules that many projects like
                    Zend, Symfony, Laravel, CakePHP, AWS SDK, FuelPHP, phpBB, Drupal, and others are adopting. You can use them for your own
                    projects, or continue to use your own personal styles.
                </p>

                <p>
                    Ideally, you should write PHP code that adheres to known standard. This could be any combination of PSRs.
                    Or one of the coding standards made by Zend or PEAR. This means other developers can easily read and work with your code. 
                </p>

                <a id="psr_1"><H2 h2="PSR-1" /></a>
                <a id="psr_12"><H2 h2="PSR-12" /></a>
                <a id="psr_4"><H2 h2="PSR-4" /></a>
                <a id="pear_coding"><H2 h2="PEAR Coding Standards" /></a>
                <a id="symfony_coding"><H2 h2="Symfony Coding Standards" /></a>

                <a id="supplements"><H2 h2="Supplements" /></a>
                <p>
                    You can fix the code layout automatically by using one of the following tools:
                </p>

                <ul>
                    <li>Also, the <a href = "https://github.com/squizlabs/PHP_CodeSniffer/wiki/Fixing-Errors-Automatically">PHP Code Beautifier and Fixer</a> tool which is included with PHP_CodeSniffer can be used to adjust your code accordingly.</li>
                    <li>One is the <a href = "https://cs.symfony.com/">PHP Coding Standards Fixer</a> which has a very well tested codebase.</li>
                </ul>

                <p>
                    And you can run phpcs manually from shell:
                </p>

                <Code code={phpcs} />

                <p>
                    It will show errors and describe how to fix them. 
                    It can also be helpful to include this command in a git hook. That way, branches which contain violations against the chosen standard cannot enter the repository until those violations have been fixed.
                </p>

                <p>
                    English is preferred for all symbol names and code infrastructure. Comments may be written in any language easily readable by all current and future parties who may be working on the codebase.
                </p>

                <Pagination previousLink="/" previous="Introduction"  nextLink="/codingStyle" next="Coding Style"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                {/* <div className="headding">Page Navigation</div> */}
                <ul>
                    <li><a href="#psr_1">PSR-1</a></li>
                    <li><a href="#psr_12">PSR-12</a></li>
                    <li><a href="#psr_1">PSR-4</a></li>
                    <li><a href="#pear_coding">PEAR Coding Standards</a></li>
                    <li><a href="#symfony_coding">Symfony Coding Standards</a></li>
                    <li><a href="#supplements">Supplements</a></li>
                </ul>
            </div>
        </div>
    </div>
}