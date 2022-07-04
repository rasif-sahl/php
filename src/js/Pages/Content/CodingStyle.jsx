import React from 'react';
import '../../../scss/pages/sideBar.scss';
import {H1, H2, H3, H4} from '../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../ReusableComponents/Pagination.jsx';
import {Code} from '../../ReusableComponents/Code.jsx';

export default function CodingStyle() {

    const phpcs = `phpcs -sw --standard=PSR1 file.php`;
    const avoid = ` <?php
        // side effect: change ini settings
        ini_set('error_reporting', E_ALL);

        // side effect: loads a file
        include "file.php";

        // side effect: generates output
        echo "<html>\n";

        // declaration
        function foo()
        {
            // function body
        }`;
    
    const emulate = `<?php
        // declaration
        function foo()
        {
            // function body
        }
        
        // conditional declaration is *not* a side effect
        if (! function_exists('bar')) {
            function bar()
            {
                // function body
            }
        }
        `;
    
    const phpAfter = `<?php
    // PHP 5.3 and later:
    namespace Vendor\Model;
    
    class Foo
    {
    }
    `;

    const phpBefore = `<?php
    // PHP 5.2.x and earlier:
    class Vendor_Model_Foo
    {
    }
    `;

    const constants = `<?php
    namespace Vendor\Model;
    
    class Foo
    {
        const VERSION = '1.0';
        const DATE_APPROVED = '2012-06-01';
    }`;

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
                <H3 h3="Overview"/>
                <ul>
                    {/* <li>Files MUST use only <?php and <?= tags.</li> */}
                    <li>Files MUST use only UTF-8 without BOM for PHP code.</li>
                    <li>Files SHOULD either declare symbols (classes, functions, constants, etc.) or cause side-effects (e.g. generate output, change .ini settings, etc.) but SHOULD NOT do both.</li>
                    <li>Namespaces and classes MUST follow an "autoloading" PSR:</li>
                    <li>Class names MUST be declared in <b>StudlyCaps.</b></li>
                    <li>Class constants MUST be declared in all upper case with underscore separators.</li>
                    <li>Method names MUST be declared in <b>camelCase.</b></li>
                </ul>

                <H3 h3="Files"/>
                <br/>
                <H4 h4="1. PHP tags"/>
                <p>PHP code MUST use the long 
                    {/* <?php ?> tags or the short-echo <?= ?>  */}
                    tags; it MUST NOT use the other tag variations.</p>
                <H4 h4="2. Character Encoding"/>
                <p>PHP code MUST use only UTF-8 without BOM.</p>
                <H4 h4="3. Side Effects"/>
                <p>
                    A file SHOULD declare new symbols (classes, functions, constants, etc.) and cause no other side effects, or it SHOULD execute logic with side effects, but SHOULD NOT do both.
                    The phrase "side effects" means execution of logic not directly related to declaring classes, functions, constants, etc., merely from including the file.
                </p>
                <p>
                    "Side effects" include but are not limited to: generating output, explicit use of require or include, connecting to external services, modifying ini settings, emitting errors or exceptions, modifying global or static variables, reading from or writing to a file, and so on.
                    The following is an example of a file with both declarations and side effects; i.e, an example of what to avoid:
                </p>
                <Code code={avoid} />

                <p>
                    The following example is of a file that contains declarations without side effects; i.e., an example of what to emulate:
                </p>
                <Code code={emulate} />

                <H3 h3="Namespace and Class Names"/>
                <p>
                    Namespaces and classes MUST follow an "autoloading" PSR: [PSR-0, PSR-4].
                    <br/>
                    This means each class is in a file by itself, and is in a namespace of at least one level: a top-level vendor name.
                    <br/>
                    Class names MUST be declared in StudlyCaps.
                    <br/>
                    Code written for PHP 5.3 and after MUST use formal namespaces.
                    <br/>
                    For example:
                </p>

                <Code code={phpAfter} />

                <p>
                    Code written for 5.2.x and before SHOULD use the pseudo-namespacing convention of Vendor_ prefixes on class names.
                </p>

                <Code code={phpBefore} />

                <H3 h3="Class Constants, Properties, and Methods"/>
                <p>
                    The term "class" refers to all classes, interfaces, and traits.
                </p>
                <H4 h4="1. Constants"/>
                <p>
                    Class constants MUST be declared in all upper case with underscore separators. For example:
                </p>
                <Code code={constants}/>
                <br/>
                <br/>

                <H4 h4="2. Properties"/>
                <p>
                    This guide intentionally avoids any recommendation regarding the use of $StudlyCaps, $camelCase, or $under_score property names.
                    <br/>
                    <br/>
                    Whatever naming convention is used SHOULD be applied consistently within a reasonable scope. That scope may be vendor-level, package-level, class-level, or method-level.
                </p>
                <H4 h4="3. Methods"/>
                <p>
                    Method names MUST be declared in camelCase().
                </p>







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