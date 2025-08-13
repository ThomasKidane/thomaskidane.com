// Analytics utility functions for custom event tracking
// This file provides helper functions for tracking custom events with Vercel Analytics

import { track } from '@vercel/analytics';

/**
 * Track a custom page view event
 * @param page - The page name/route
 * @param properties - Additional properties to track
 */
export const trackPageView = (page: string, properties?: Record<string, string | number | boolean>) => {
  track('page_view', {
    page,
    ...properties,
  });
};

/**
 * Track a custom button click event
 * @param buttonName - The name/identifier of the button
 * @param properties - Additional properties to track
 */
export const trackButtonClick = (buttonName: string, properties?: Record<string, string | number | boolean>) => {
  track('button_click', {
    button_name: buttonName,
    ...properties,
  });
};

/**
 * Track a custom link click event
 * @param linkName - The name/identifier of the link
 * @param linkUrl - The URL being clicked
 * @param properties - Additional properties to track
 */
export const trackLinkClick = (linkName: string, linkUrl: string, properties?: Record<string, string | number | boolean>) => {
  track('link_click', {
    link_name: linkName,
    link_url: linkUrl,
    ...properties,
  });
};

/**
 * Track a custom form submission event
 * @param formName - The name/identifier of the form
 * @param properties - Additional properties to track
 */
export const trackFormSubmission = (formName: string, properties?: Record<string, string | number | boolean>) => {
  track('form_submission', {
    form_name: formName,
    ...properties,
  });
};

/**
 * Track a custom download event
 * @param fileName - The name of the file being downloaded
 * @param fileType - The type of file
 * @param properties - Additional properties to track
 */
export const trackDownload = (fileName: string, fileType: string, properties?: Record<string, string | number | boolean>) => {
  track('download', {
    file_name: fileName,
    file_type: fileType,
    ...properties,
  });
};

/**
 * Track a custom scroll event (useful for engagement tracking)
 * @param section - The section being scrolled to
 * @param properties - Additional properties to track
 */
export const trackScroll = (section: string, properties?: Record<string, string | number | boolean>) => {
  track('scroll', {
    section,
    ...properties,
  });
};
