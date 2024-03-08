const vscode = require('vscode');
const fs = require('fs');


function 	getConfig() {
	return vscode.workspace.getConfiguration('folder-colors').get('settings');
}

class MyFileDecorationProvider {
    constructor() {
        // Implements an EventEmitter to signal changes
        this._onDidChangeFileDecorations = new vscode.EventEmitter();
        this.onDidChangeFileDecorations = this._onDidChangeFileDecorations.event;
    }

    /**
     * This method is called by VS Code to get the decoration for each file and folder.
     * 
     * @param {vscode.Uri} uri The URI of the file or folder to be decorated.
     * @return {vscode.ProviderResult<vscode.FileDecoration>} The decoration or `undefined` if no decoration is to be applied.
     */
    provideFileDecoration(uri) {

		// do not decorate files
		const stats = fs.statSync(uri.fsPath);
		if (stats.isFile()) {
			return undefined;
		}

		const config = getConfig();

		const decorationConfig = config.find(conf => uri.path.endsWith(conf.name));
		if (decorationConfig) {
			return {
				badge: decorationConfig.badge,
				color: new vscode.ThemeColor(decorationConfig.color),
				propagate: false
			};
		}
        // Return undefined if no decoration should be applied
        return undefined;
    }
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    
    const myFileDecorationProvider = new MyFileDecorationProvider();

    // Register the FileDecorationProvider with Visual Studio Code.
    context.subscriptions.push(vscode.window.registerFileDecorationProvider(myFileDecorationProvider));

	console.log('Folder-colors activated successfully.');
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
