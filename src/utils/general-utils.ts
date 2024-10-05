export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();

  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
    };
    if (date.getFullYear() !== now.getFullYear()) {
      options.year = "numeric";
    }
    return date.toLocaleDateString("en-US", options);
  }
};

export const timeDifferenceFromNow = (dateString: string): string => {
  const currentDate = new Date().toISOString().split("T")[0];
  const timestamp = dateString && dateString.split("T")[1];
  const fullTimestamp = `${currentDate}T${timestamp}`;
  const givenTime = new Date(fullTimestamp);
  const currentTime = new Date();

  const differenceInMs = Math.abs(currentTime.getTime() - givenTime.getTime());
  const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));
  const differenceInHours = Math.floor(differenceInMs / (1000 * 60 * 60));

  if (differenceInMinutes < 60) {
    return `${differenceInMinutes} m`; // Return minutes if less than an hour
  } else {
    return `${differenceInHours} h`; // Return hours if more than 60 minutes
  }
};
