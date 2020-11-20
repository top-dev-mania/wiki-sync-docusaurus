---
#id: website-implementation-documentation-checklist
title: Website Implementation and documentation checklist
sidebar_label: Website Implementation and documentation checklist
---

The purpose of this checklist is to provide the set of tasks that have to be followed as a base for each of the website proxy implementation and a list of the expected deliverables from each team. This implementation checklist is for the SOW flavour: (https://github.com/filetrust/icap-infrastructure)

## Implementation checklist

 - Review the assigned website, review the structure of it, and if auth is required or not.
 - Programmatically install the website to a live EC2 server and make/request the necessary DNS changes
 - Make sure that the EC2 instance is having a persistent IP.
 - Protect the website using instructions from https://github.com/filetrust/icap-infrastructure -These steps are for docker implementation, Kubernetes engine, and adaptation service. The work done here can be used as a reference.
 - Test the initial setup by downloading a PDF and making sure that it is Glasswall Processed.
 - Create a how-to install demo and share it in the slack channel.
 - Share with the team for more testing - QA team should use a suite of tests to generate traffic.
 - Create AMI and release for the implementation.

## Documentation checklist

 - Update readme instructions - include any specific changes/customizations that were done for the website.
 - Document basic information: IP, ports opened (ICAP port should be opened), engine version, OS, infrastructure, provisioning, container engine. - In JSON file (additional instructions to be added)
 - Create end to end demo video and share in the slack channel
 - PM to share the results from QA and traffic metrics generated
 - Create an architecture diagram (either in the normal visio/draw.io mode or ideally in plantuml) - this will show the multiple components and how everything fits together
 - Create dataflow/sequence diagrams (using something like https://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/sequenceDiagram.html or https://plantuml.com/sequence-diagram) which will show the sequence of events and how the data is moved across the system
 - Update the assigned Wardley maps showing the maturity level of each components https://miro.com/app/board/o9J_kgg3ft0=/

