export class Draggable {
    constructor(element, options = {}) {
        this.element = element;
        this.handle = options.handle || element.querySelector('.panel-header') || element;
        this.boundary = options.boundary || document.body;
        this.onDragStart = options.onDragStart || null;
        this.onDrag = options.onDrag || null;
        this.onDragEnd = options.onDragEnd || null;
        
        this.isDragging = false;
        this.isDragStarted = false;
        this.dragOffset = { x: 0, y: 0 };
        this.startPosition = { x: 0, y: 0 };
        this.currentPosition = { x: 0, y: 0 };
        this.mouseDownPosition = { x: 0, y: 0 };
        this.dragThreshold = 5; // Minimum pixels to move before considering it a drag
        
        this.init();
    }
    
    init() {
        // Make the handle draggable
        this.handle.style.cursor = 'grab';
        this.handle.setAttribute('data-draggable-handle', 'true');
        
        // Add event listeners to handle
        this.handle.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.handle.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false });
        
        // Also add event listeners to the entire element for minimized state
        this.element.addEventListener('mousedown', this.onElementMouseDown.bind(this));
        this.element.addEventListener('touchstart', this.onElementTouchStart.bind(this), { passive: false });
        
        // Prevent drag on buttons and inputs within handle
        this.handle.addEventListener('mousedown', (e) => {
            if (e.target.matches('button, input, select, textarea, [contenteditable]')) {
                e.stopPropagation();
            }
        });
        
        // Store initial position
        const rect = this.element.getBoundingClientRect();
        this.currentPosition = {
            x: rect.left,
            y: rect.top
        };
        
        // Apply initial transform if element doesn't have position absolute
        if (getComputedStyle(this.element).position !== 'absolute') {
            this.element.style.position = 'absolute';
            this.element.style.left = this.currentPosition.x + 'px';
            this.element.style.top = this.currentPosition.y + 'px';
        }
    }
    
    onElementMouseDown(e) {
        // Only handle if element is minimized and not clicking on buttons
        if (!this.element.classList.contains('minimized')) {
            return;
        }
        
        // Don't drag if clicking on buttons or controls
        if (e.target.matches('button, input, select, textarea, [contenteditable]') ||
            e.target.closest('button, input, select, textarea, [contenteditable]')) {
            return;
        }
        
        // Store initial mouse position but don't start drag yet
        this.mouseDownPosition = { x: e.clientX, y: e.clientY };
        this.isDragStarted = false;
        
        // Mark the element to prevent click events
        this.element.setAttribute('data-drag-pending', 'true');
        
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
    }

    onMouseDown(e) {
        // If element is minimized, let the element's mousedown handler take over
        if (this.element.classList.contains('minimized')) {
            return;
        }

        // Don't drag if clicking on buttons or controls
        if (e.target.matches('button, input, select, textarea, [contenteditable]')) {
            return;
        }
        
        // Store initial mouse position but don't start drag yet
        this.mouseDownPosition = { x: e.clientX, y: e.clientY };
        this.isDragStarted = false;
        
        // Mark the element to prevent click events
        this.element.setAttribute('data-drag-pending', 'true');
        
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
    }
    
    onElementTouchStart(e) {
        // Only handle if element is minimized and not clicking on buttons
        if (!this.element.classList.contains('minimized')) {
            return;
        }
        
        // Don't drag if clicking on buttons or controls
        if (e.target.matches('button, input, select, textarea, [contenteditable]') ||
            e.target.closest('button, input, select, textarea, [contenteditable]')) {
            return;
        }
        
        // Store initial touch position but don't start drag yet
        const touch = e.touches[0];
        this.mouseDownPosition = { x: touch.clientX, y: touch.clientY };
        this.isDragStarted = false;
        
        // Mark the element to prevent click events
        this.element.setAttribute('data-drag-pending', 'true');
        
        document.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
        document.addEventListener('touchend', this.onTouchEnd.bind(this));
    }

    onTouchStart(e) {
        // If element is minimized, let the element's touchstart handler take over
        if (this.element.classList.contains('minimized')) {
            return;
        }

        // Don't drag if clicking on buttons or controls
        if (e.target.matches('button, input, select, textarea, [contenteditable]')) {
            return;
        }
        
        // Store initial touch position but don't start drag yet
        const touch = e.touches[0];
        this.mouseDownPosition = { x: touch.clientX, y: touch.clientY };
        this.isDragStarted = false;
        
        // Mark the element to prevent click events
        this.element.setAttribute('data-drag-pending', 'true');
        
        document.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
        document.addEventListener('touchend', this.onTouchEnd.bind(this));
    }
    
    onMouseMove(e) {
        // If we're already dragging, just update position
        if (this.isDragging) {
            e.preventDefault();
            this.updatePosition(e.clientX, e.clientY);
            return;
        }
        
        // Check if we should start dragging based on distance moved
        if (!this.isDragStarted && this.mouseDownPosition) {
            const deltaX = Math.abs(e.clientX - this.mouseDownPosition.x);
            const deltaY = Math.abs(e.clientY - this.mouseDownPosition.y);
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            if (distance > this.dragThreshold) {
                // Start dragging
                this.isDragStarted = true;
                e.preventDefault();
                this.startDrag(e.clientX, e.clientY);
                this.updatePosition(e.clientX, e.clientY);
            }
        }
    }
    
    onTouchMove(e) {
        // If we're already dragging, just update position
        if (this.isDragging) {
            e.preventDefault();
            const touch = e.touches[0];
            this.updatePosition(touch.clientX, touch.clientY);
            return;
        }
        
        // Check if we should start dragging based on distance moved
        if (!this.isDragStarted && this.mouseDownPosition) {
            const touch = e.touches[0];
            const deltaX = Math.abs(touch.clientX - this.mouseDownPosition.x);
            const deltaY = Math.abs(touch.clientY - this.mouseDownPosition.y);
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            if (distance > this.dragThreshold) {
                // Start dragging
                this.isDragStarted = true;
                e.preventDefault();
                this.startDrag(touch.clientX, touch.clientY);
                this.updatePosition(touch.clientX, touch.clientY);
            }
        }
    }
    
    onMouseUp(e) {
        // Clean up event listeners first
        document.removeEventListener('mousemove', this.onMouseMove.bind(this));
        document.removeEventListener('mouseup', this.onMouseUp.bind(this));
        
        // If we were dragging, end the drag
        if (this.isDragging) {
            this.endDrag();
        } else {
            // Reset states for next interaction
            this.isDragStarted = false;
            this.mouseDownPosition = null;
        }
        
        // Remove drag pending marker after a short delay to allow click events to be processed
        setTimeout(() => {
            this.element.removeAttribute('data-drag-pending');
        }, 10);
    }
    
    onTouchEnd(e) {
        // Clean up event listeners first
        document.removeEventListener('touchmove', this.onTouchMove.bind(this));
        document.removeEventListener('touchend', this.onTouchEnd.bind(this));
        
        // If we were dragging, end the drag
        if (this.isDragging) {
            this.endDrag();
        } else {
            // Reset states for next interaction
            this.isDragStarted = false;
            this.mouseDownPosition = null;
        }
        
        // Remove drag pending marker after a short delay to allow click events to be processed
        setTimeout(() => {
            this.element.removeAttribute('data-drag-pending');
        }, 10);
    }
    
    startDrag(clientX, clientY) {
        this.isDragging = true;
        this.element.classList.add('dragging');
        this.handle.style.cursor = 'grabbing';
        
        const rect = this.element.getBoundingClientRect();
        this.dragOffset = {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
        
        this.startPosition = {
            x: rect.left,
            y: rect.top
        };
        
        if (this.onDragStart) {
            this.onDragStart(this.element, { x: rect.left, y: rect.top });
        }
        
        // Bring dragged element to front
        this.element.style.zIndex = '1000';
    }
    
    updatePosition(clientX, clientY) {
        if (!this.isDragging) return;
        
        let newX = clientX - this.dragOffset.x;
        let newY = clientY - this.dragOffset.y;
        
        // Apply boundary constraints
        const elementRect = this.element.getBoundingClientRect();
        const boundaryRect = this.boundary.getBoundingClientRect();
        
        // Minimum visible area (50px)
        const minVisible = 50;
        
        newX = Math.max(boundaryRect.left - elementRect.width + minVisible, newX);
        newX = Math.min(boundaryRect.right - minVisible, newX);
        newY = Math.max(boundaryRect.top, newY);
        newY = Math.min(boundaryRect.bottom - minVisible, newY);
        
        this.currentPosition = { x: newX, y: newY };
        
        this.element.style.left = newX + 'px';
        this.element.style.top = newY + 'px';
        
        // Remove any right/bottom positioning that might interfere
        this.element.style.right = 'auto';
        this.element.style.bottom = 'auto';
        
        if (this.onDrag) {
            this.onDrag(this.element, this.currentPosition);
        }
    }
    
    endDrag() {
        if (!this.isDragging) return;
        
        this.isDragging = false;
        this.isDragStarted = false;
        this.mouseDownPosition = null;
        this.element.classList.remove('dragging');
        this.handle.style.cursor = 'grab';
        
        // Reset z-index after a short delay
        setTimeout(() => {
            this.element.style.zIndex = '';
        }, 100);
        
        if (this.onDragEnd) {
            this.onDragEnd(this.element, this.currentPosition);
        }
        
        // Save position to localStorage
        this.savePosition();
    }
    
    savePosition() {
        const panelId = this.element.id;
        if (panelId) {
            const position = {
                x: this.currentPosition.x,
                y: this.currentPosition.y
            };
            localStorage.setItem(`panel-position-${panelId}`, JSON.stringify(position));
        }
    }
    
    loadPosition() {
        const panelId = this.element.id;
        if (panelId) {
            const saved = localStorage.getItem(`panel-position-${panelId}`);
            if (saved) {
                try {
                    const position = JSON.parse(saved);
                    this.setPosition(position.x, position.y);
                } catch (e) {
                    console.warn('Failed to load saved position for', panelId);
                }
            }
        }
    }
    
    setPosition(x, y) {
        this.currentPosition = { x, y };
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
        this.element.style.right = 'auto';
        this.element.style.bottom = 'auto';
    }
    
    resetPosition() {
        // Remove saved position
        const panelId = this.element.id;
        if (panelId) {
            localStorage.removeItem(`panel-position-${panelId}`);
        }
        
        // Reset to original CSS positioning
        this.element.style.position = '';
        this.element.style.left = '';
        this.element.style.top = '';
        this.element.style.right = '';
        this.element.style.bottom = '';
        this.element.style.transform = '';
    }
    
    destroy() {
        this.handle.removeEventListener('mousedown', this.onMouseDown.bind(this));
        this.handle.removeEventListener('touchstart', this.onTouchStart.bind(this));
        this.element.classList.remove('dragging');
        this.handle.style.cursor = '';
    }
}

// Utility function to make multiple elements draggable
export function makeDraggable(selector, options = {}) {
    const elements = document.querySelectorAll(selector);
    const draggables = [];
    
    elements.forEach(element => {
        const draggable = new Draggable(element, options);
        draggables.push(draggable);
    });
    
    return draggables;
}
