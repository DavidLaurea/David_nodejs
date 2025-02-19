export function getCurrentDate() {
    return new Date();
  }
  
  export function formatDate(date) {
    // Format the date as 'YYYY-MM-DD'
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  