# Pytron Task Manager

A modern, matte-black system monitor and task manager built with Pytron (Python + React).

## Features
- Real-time CPU, Memory, and Disk usage monitoring.
- Live graphs for system stats.
- Process list sorted by CPU usage.
- Ability to terminate processes.
- Frameless window with custom title bar.

## Setup

1.  **Install Python Dependencies**
    ```bash
    pip install -r requirements.txt
    ```

2.  **Install Frontend Dependencies**
    Navigate to the `frontend` folder:
    ```bash
    cd frontend
    npm install
    ```

## Running the App

1.  **Build the Frontend**
    ```bash
    pytron build-frontend
    ```
    This will generate the static files in `../build/frontend`.

2.  **Run the Python App**
    Go back to the root folder and run:
    ```bash
    pytron run
    ```

## Development

For development, you can run the app in dev mode:
```bash
pytron run --dev
```
And update `app.py` to load from the dev server URL if needed (Pytron supports loading from URL in debug mode usually, or you can just rebuild).
