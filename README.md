# Fetch NUI Module

## Overview
This module allows you to easily interact with the NUI (Native User Interface) in your frontend applications. With the `Post` function, you can send messages to the NUI with minimal setup.

## Installation

To get started, simply install the module via NPM:

```bash
npm install fetchnui
OR
yarn add fetchnui
```
Import the module
Once installed, you can import the Post function into your frontend JavaScript file:
```js
import Post from 'fetchnui';
```
Usage

Sending Events
Use the Post function to send an event to your NUI interface. The Post function accepts two parameters:

eventName: The name of the event you want to trigger (e.g., 'playerEntered').
data: The data you want to send along with the event (this can be any object).
Example Usage
```js
Post('test', {});
```
In this example, we send an event called 'test' to the NUI with an empty object as the associated data.

Custom Data Example
You can also send custom data with your event:
```js
Post('test', { playerId: 123, playerName: 'JohnDoe' });
```
In this case, we're sending an object with player data to the NUI.

# Example Project Setup

Install the module using NPM/Yarn.
Import the Post function into your project.
Use Post to trigger events and pass data between your frontend and NUI.
```js
import Post from 'fetchnui';
function playerJoined() {
    const playerData = { playerId: 123, playerName: 'JohnDoe' };
    Post('playerEntered', playerData);
}
```
Download:
https://www.npmjs.com/package/fetchnui?activeTab=readme
