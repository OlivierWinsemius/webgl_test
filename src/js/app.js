import SkiTracksExport from '../assets/Day_1_2018-2019.gpx';
import toGeoJSON from 'togeojson';
export default class App {
    static onResize() {
        const width = gl.canvas.clientWidth;
        const height = gl.canvas.clientHeight;
        if (gl.canvas.width !== width || gl.canvas.height !== height) {
            gl.canvas.width = width;
            gl.canvas.height = height;
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            Camera.onResize();
        }
    }

    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;

        const track = SkiTracksExport.gpx.trk[0];
        const trackPoints = track.trkseg[0].trkpt;
        this.points = new Array(trackPoints.length);
        console.log(trackPoints.length);

        for (let i = 0; i < trackPoints.length; i += 1) {
            const { lat: trackPointLat, lon: trackPointLon } = trackPoints[i].$;
            const lat = ((Number(trackPointLat) / 10) - 4.7168) * 20000;
            const lon = ((Number(trackPointLon) / 10) - 1.1805) * 20000;
            this.points[i] = {
                timeStamp: trackPoints[i].time[0],
                elevation: trackPoints[i].ele[0],
                lat,
                lon,
                shape: new shapes.Ellipse()
                    .setOrigin(0.5, 0.5)
                    .scale(0.1)
                    .translate(lat, lon, -10)
                    .setColor(1, 0, 0),
            };
        }
        console.log(this.points);
        this.update();
    }

    update() {
        App.onResize();
        this.draw();
        requestAnimationFrame(this.update.bind(this));
    }

    draw() {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.points.forEach(({ shape }) => shape.draw());
    }
}
