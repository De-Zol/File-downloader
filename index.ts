import * as request from 'request';
import * as path from 'path';
import * as fs from 'fs';
import * as mime from 'mime-types';
import {FileDownloader} from './src/FileDownloader';
import {DownloadStatus, EventType} from './src/types';
// const request = require('request');
const url = 'https://ru-drivemusic.net/dl/xgmp6N2UXRdQzVWQIWoaIQ/1574037943/download_music/2013/03/one-republic-i-lived.mp3';
// const url = 'http://modp.wgcdn.co/media/mod_files/WoT_ModPack_by_Amway921_v1.6.1.3_-_9a.zip';
// const url = 'https://dl.pstmn.io/download/latest/win64';
// const url = 'https://github-production-release-asset-2e65be.s3.amazonaws.com/23216272/71c5a100-00d6-11ea-822c-0617e3aba1d7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20191110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20191110T160815Z&X-Amz-Expires=300&X-Amz-Signature=062e97d6f14ecad5f5ad2fe375f48a71fc3742b6eb319ef66a75181dcb9fe7bb&X-Amz-SignedHeaders=host&actor_id=0&response-content-disposition=attachment%3B%20filename%3DGit-2.24.0.2-64-bit.exe&response-content-type=application%2Foctet-stream';
// const url = 'http://n.tracktor.site/td.php?s=u7mGjDqozeDlYspHg2YDjvSFgQO7RDwQIbqqddVIhpaXkWhEyTMZ3gLLlm39xtihHRH9I8K4cBNYhKl4QYhPEfTo%2BTKu8l3oTce%2FpLeQoKLfI2TBrMKbnT8yhccuHD2M%2BaCyHA%3D%3D';

// const downloader = new FileDownloader(url, 'C:\\Users\\Beasty\\Documents\\Projects\\File-downloader\\');
// downloader.on(EventType.STATUS, (status: DownloadStatus) => {
//     console.log('status', status);
// });
//
// downloader.on(EventType.ERROR, (err) => {
//     console.log('error', err);
// });
//
// downloader.on(EventType.PROGRESS, (progress: number) => {
//     console.log('progress:', progress);
// });
// downloader.start();
1
2
3
4
function getFileExtension(resp): string {
    let extension = '';
    extension = mime.extension(resp.headers['content-type']);
    if (extension === 'bin') {
        extension = 'exe';
    }
    return '.' + extension;
}

async function xz2() {
    await xz();
}

function xz(): Promise<void> {
    return new Promise(((resolve, reject) => {
        const filePath = 'C:\\Users\\Beasty\\Downloads\\AMD-Ryzen-Master.exe';
        fs.readFile(filePath, (err, data) => {
            console.log(data.length);
        });
    }));
}
xz2();
process.stdin.resume();
console.log('end');
