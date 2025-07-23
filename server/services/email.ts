import { ArtistRegistrationRequest } from "@shared/api";

// Email configuration (in production, use environment variables)
const EMAIL_CONFIG = {
  adminEmail: 'jg@thetent.club',
  fromEmail: 'noreply@thetent.club',
  appName: 'The Tent'
};

// Email templates
const generateArtistConfirmationEmail = (
  registration: ArtistRegistrationRequest & { id: string; timestamp: Date },
  loginCredentials: { email: string; password: string }
) => {
  return {
    to: registration.email,
    from: EMAIL_CONFIG.fromEmail,
    subject: `Registration Confirmation - ${EMAIL_CONFIG.appName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #6366f1; margin: 0;">THE TENT</h1>
          <p style="color: #666; margin: 5px 0;">VIP Artist Hospitality</p>
        </div>
        
        <h2 style="color: #333;">Registration Confirmed!</h2>
        
        <p>Dear ${registration.artistName},</p>
        
        <p>Thank you for registering with The Tent's exclusive artist program. We have successfully received your registration and our team will begin the verification process.</p>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Registration Details:</h3>
          <p><strong>Registration ID:</strong> ${registration.id}</p>
          <p><strong>Artist Name:</strong> ${registration.artistName}</p>
          <p><strong>Email:</strong> ${registration.email}</p>
          <p><strong>Genre:</strong> ${registration.genre}</p>
          <p><strong>Selected Festivals:</strong> ${registration.selectedFestivals.join(', ') || 'None selected'}</p>
          <p><strong>Submitted:</strong> ${registration.timestamp.toLocaleString()}</p>
        </div>

        <div style="background: #dcfce7; border: 2px solid #16a34a; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #15803d;">🔐 Your Login Credentials</h3>
          <p style="margin: 10px 0;"><strong>Login Email:</strong> ${loginCredentials.email}</p>
          <p style="margin: 10px 0;"><strong>Password:</strong> <code style="background: #f0f0f0; padding: 2px 6px; border-radius: 4px; font-family: monospace;">${loginCredentials.password}</code></p>
          <p style="margin: 10px 0; color: #15803d;"><strong>Login URL:</strong> <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/artist-login" style="color: #16a34a; text-decoration: none; font-weight: bold;">Access Your Dashboard</a></p>
          <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 10px; margin-top: 15px;">
            <p style="margin: 0; color: #92400e; font-size: 14px;"><strong>Important:</strong> Save these credentials securely. You'll need them to access your artist dashboard and manage your festival reservations.</p>
          </div>
        </div>
        
        <h3 style="color: #333;">What happens next?</h3>
        <ol style="color: #555; line-height: 1.6;">
          <li><strong>Verification (24-48 hours):</strong> Our team will verify your artist credentials and festival performance schedule.</li>
          <li><strong>Confirmation:</strong> You'll receive detailed information about The Tent services and access instructions.</li>
          <li><strong>Festival Experience:</strong> Enjoy premium hospitality services at your selected festivals.</li>
        </ol>
        
        <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0;">
          <p style="margin: 0; color: #1e40af;"><strong>Need assistance?</strong> Contact our artist relations team at <a href="mailto:hello@thetent.club" style="color: #3b82f6;">hello@thetent.club</a></p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #666; font-size: 14px;">
            &copy; 2024 The Tent. Elevating festival experiences worldwide.<br>
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      </div>
    `,
    text: `
THE TENT - Registration Confirmed!

Dear ${registration.artistName},

Thank you for registering with The Tent's exclusive artist program. We have successfully received your registration.

Registration Details:
- Registration ID: ${registration.id}
- Artist Name: ${registration.artistName}
- Email: ${registration.email}
- Genre: ${registration.genre}
- Selected Festivals: ${registration.selectedFestivals.join(', ') || 'None selected'}
- Submitted: ${registration.timestamp.toLocaleString()}

🔐 YOUR LOGIN CREDENTIALS:
- Login Email: ${loginCredentials.email}
- Password: ${loginCredentials.password}
- Login URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}/artist-login

IMPORTANT: Save these credentials securely. You'll need them to access your artist dashboard and manage your festival reservations.

What happens next?
1. Verification (24-48 hours): Our team will verify your artist credentials and festival performance schedule.
2. Confirmation: You'll receive detailed information about The Tent services and access instructions.
3. Festival Experience: Enjoy premium hospitality services at your selected festivals.

Need assistance? Contact our artist relations team at hello@thetent.club

© 2024 The Tent. Elevating festival experiences worldwide.
    `
  };
};

const generateAdminNotificationEmail = (registration: ArtistRegistrationRequest & { id: string; timestamp: Date }) => {
  return {
    to: EMAIL_CONFIG.adminEmail,
    from: EMAIL_CONFIG.fromEmail,
    subject: `New Artist Registration - ${registration.artistName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #6366f1; margin: 0;">THE TENT</h1>
          <p style="color: #666; margin: 5px 0;">Admin Notification</p>
        </div>
        
        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #92400e;">New Artist Registration Received</h2>
        </div>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Artist Information</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
            <div>
              <p><strong>Artist Name:</strong> ${registration.artistName}</p>
              <p><strong>Legal Name:</strong> ${registration.legalName}</p>
              <p><strong>Email:</strong> ${registration.email}</p>
              <p><strong>Phone:</strong> ${registration.phone}</p>
            </div>
            <div>
              <p><strong>Genre:</strong> ${registration.genre}</p>
              <p><strong>Years Active:</strong> ${registration.yearsActive}</p>
              <p><strong>Registration ID:</strong> ${registration.id}</p>
              <p><strong>Submitted:</strong> ${registration.timestamp.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Management Contact</h3>
          <p><strong>Manager/Agent:</strong> ${registration.managerName}</p>
          <p><strong>Management Email:</strong> ${registration.managementEmail}</p>
        </div>
        
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Festival Selections</h3>
          ${registration.selectedFestivals.length > 0 
            ? `<ul style="margin: 0; padding-left: 20px;">${registration.selectedFestivals.map(festival => `<li>${festival}</li>`).join('')}</ul>`
            : '<p style="color: #666; margin: 0;">No festivals selected</p>'
          }
        </div>
        
        ${registration.specialRequests ? `
        <div style="background: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Special Requests</h3>
          <p style="margin: 0; white-space: pre-wrap;">${registration.specialRequests}</p>
        </div>
        ` : ''}
        
        <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0;">
          <p style="margin: 0; color: #1e40af;">
            <strong>Action Required:</strong> Please verify this artist's credentials and festival performance schedule within 48 hours.
            <br><br>
            <a href="/admin/registrations" style="color: #3b82f6; text-decoration: none; font-weight: bold;">→ View in Admin Dashboard</a>
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #666; font-size: 14px;">
            &copy; 2024 The Tent. Admin Notification System<br>
            This is an automated message.
          </p>
        </div>
      </div>
    `,
    text: `
THE TENT - New Artist Registration

New artist registration received:

Artist Information:
- Artist Name: ${registration.artistName}
- Legal Name: ${registration.legalName}
- Email: ${registration.email}
- Phone: ${registration.phone}
- Genre: ${registration.genre}
- Years Active: ${registration.yearsActive}
- Registration ID: ${registration.id}
- Submitted: ${registration.timestamp.toLocaleString()}

Management Contact:
- Manager/Agent: ${registration.managerName}
- Management Email: ${registration.managementEmail}

Festival Selections:
${registration.selectedFestivals.length > 0 
  ? registration.selectedFestivals.map(festival => `- ${festival}`).join('\n')
  : 'No festivals selected'
}

${registration.specialRequests ? `Special Requests:\n${registration.specialRequests}\n` : ''}

Action Required: Please verify this artist's credentials and festival performance schedule within 48 hours.

© 2024 The Tent. Admin Notification System
    `
  };
};

// Email sending service (mock implementation for demo)
export const sendEmail = async (emailData: { to: string; from: string; subject: string; html: string; text: string }) => {
  // In production, integrate with email service like SendGrid, AWS SES, or Nodemailer
  console.log('\n🚀 EMAIL NOTIFICATION SENT:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📧 TO: ${emailData.to}`);
  console.log(`📤 FROM: ${emailData.from}`);
  console.log(`📋 SUBJECT: ${emailData.subject}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📄 TEXT CONTENT:');
  console.log(emailData.text);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return { success: true, messageId: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` };
};

// Main email notification function
export const sendRegistrationNotifications = async (
  registration: ArtistRegistrationRequest & { id: string; timestamp: Date },
  loginCredentials: { email: string; password: string }
) => {
  try {
    console.log(`\n📨 Sending registration notifications for ${registration.artistName}...`);
    
    // Send confirmation email to artist
    const artistEmail = generateArtistConfirmationEmail(registration);
    const artistResult = await sendEmail(artistEmail);
    
    // Send notification email to admin
    const adminEmail = generateAdminNotificationEmail(registration);
    const adminResult = await sendEmail(adminEmail);
    
    console.log(`✅ Registration notifications sent successfully`);
    console.log(`   Artist confirmation: ${artistResult.messageId}`);
    console.log(`   Admin notification: ${adminResult.messageId}\n`);
    
    return {
      success: true,
      artistEmailId: artistResult.messageId,
      adminEmailId: adminResult.messageId
    };
  } catch (error) {
    console.error('❌ Failed to send registration notifications:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};
