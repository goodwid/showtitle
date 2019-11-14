# ShowTitle

This is an irc bot that listens for (http|https) URIs in channel, and fetches the title of those URIs and posts them to the channel.

It is an adaptation from an original bot written by tamouse__ and Alaric in #callahans on Freenode, and run by MildBill.  After having some suggestions on how to improve, and utterly failing to understand the original Perl code, I decided to duplicate the bot in JavaScript with node.

## Message format

``` js
{
  type: 'privmsg',
  nick: 'Flaim',
  ident: '~goodwid',
  hostname: '<ip redacted>',
  target: 'Flaimbot',
  group: undefined,
  message: 'Yo.',
  tags: {},
  time: undefined,
  account: undefined,
  reply: [Function]
}
```
