import React, { useState } from "react";
import { Folder, File, Link, Package } from "react-feather";
import ContactButton from "../ContactButton/Index";

const ProjectsTree = () => {
    const [openNodes, setOpenNodes] = useState({
        WebDesigns: true,
        Projects: true,
        Frontend: true,
        Backend: true,
        FullStack: true,
    }); // Keeps track of open nodes.

    // Toggles the visibility of sub-trees.
    const toggleNode = (nodeName) => {
        setOpenNodes((prev) => ({
            ...prev,
            [nodeName]: !prev[nodeName],
        }));
    };

    return (
        <div className="file-tree-container">

            <h1>Projects</h1>
            <div className="file-tree-inner-container row">

                <div className="file-tree col-md-4">
                    <ul className="tree">
                        {/* Projects Folder */}
                        <li>
                            <div className="node" onClick={() => toggleNode("Projects")}>
                                <Folder />
                                <span className="folder-name">Projects</span>
                            </div>
                            {openNodes["Projects"] && (
                                <ul className="sub-tree">
                                    {/* WebDesigns Folder */}
                                    <li>
                                        <div className="node" onClick={() => toggleNode("WebDesigns")}>
                                            <Folder />
                                            <span className="folder-name">Web Designs</span>
                                        </div>
                                        {openNodes["WebDesigns"] && (
                                            <ul className="sub-tree">
                                                <li>
                                                    <div className="node">
                                                        <File />
                                                        <span>abc project <Link width="15px" /></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    {/* Frontend Folder */}
                                    <li>
                                        <div className="node" onClick={() => toggleNode("Frontend")}>
                                            <Folder />
                                            <span className="folder-name">Frontend</span>
                                        </div>
                                        {openNodes["Frontend"] && (
                                            <ul className="sub-tree">
                                                <li>
                                                    <div className="node">
                                                        <File />
                                                        <span>pqr project <Link width="15px" /></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="node">
                                                        <File />
                                                        <span>xyz project <Link width="15px" /></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    {/* Backend Folder */}
                                    <li>
                                        <div className="node" onClick={() => toggleNode("Backend")}>
                                            <Folder />
                                            <span className="folder-name">Backend</span>
                                        </div>
                                        {openNodes["Backend"] && (
                                            <ul className="sub-tree">
                                                {/* UI Folder */}
                                                <li>
                                                    {openNodes["Backend"] && (
                                                        <ul className="sub-tree">
                                                            <li>
                                                                <div className="node">
                                                                    <File />
                                                                    <span>lmn project <Link width="15px" /></span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    )}
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    {/* FullStack Folder */}
                                    <li>
                                        <div className="node" onClick={() => toggleNode("FullStack")}>
                                            <Folder />
                                            <span className="folder-name">Full Stack</span>
                                        </div>
                                        {openNodes["FullStack"] && (
                                            <ul className="sub-tree">
                                                <li>
                                                    <div className="node">
                                                        <File />
                                                        <span>Pentagon Career Institute <Link width="15px" /></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>

                <div className="col-md-5">

                </div>

                <div className="col-md-2">
                    <ContactButton content="All Projects"
                        icon={Package}
                        className="all-projects-button" style={{ position: 'absolute', right: '1vw', top: '215vh' }}
                        onClick={() => console.log('Contact button clicked!')} />
                </div>

            </div>
        </div>
    );
};

export default ProjectsTree;
