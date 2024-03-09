# folder-colors

A small VS Code extension to set custom colors and badges for folders in the explorer.
It helps me spot some important repositories when I have a long list of repos in the current folder.

## Features

In the settings, add the folders you want to highlight:
```
    "folder-colors.settings": [
        {
            "name": "repo-4", "color": "terminal.ansiBrightRed", "badge": "🌈🌈"
        },
        {
            "name": "repo-2", "color": "terminal.ansiBrightGreen", "badge": "🚀🚀"
        }
    ]
```

![Demo with 2 decorated paths](https://github.com/BeneHa/folder-colors/blob/main/doc/images/demo.png?raw=true)

## Known limitations

When other extensions like the VS Code built-in git integration set a badge on a folder (e.g. to show uncommitted changes) it will override the custom badge.

## Similar extensions

There are similar extensions but none matched quite what I wanted to have for myself. Check them out:
- [Folder Path Color](https://marketplace.visualstudio.com/items?itemName=VisbyDev.folder-path-color)
- [FolderColorizes](https://marketplace.visualstudio.com/items?itemName=SergeyEgorov.folder-color)